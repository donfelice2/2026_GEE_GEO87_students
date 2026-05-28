// =============================================================
// M2_05 — Cloud Masking for Sentinel-2
// =============================================================
// Dataset: COPERNICUS/S2_SR
// Area: Stuttgart, Germany

var aoi = ee.Geometry.Polygon(
  [[[8.9, 48.45], [8.9, 48.65], [9.25, 48.65], [9.25, 48.45]]], null, false);
Map.centerObject(aoi, 11);

// ============================================================
// METHOD 1: QA60 bit masking (works on L1C and SR)
// ============================================================
// QA60 is a 16-bit band. Two bits indicate clouds:
//   Bit 10 = opaque cloud
//   Bit 11 = cirrus cloud
// A value >= 1024 means at least one cloud bit is set.

function maskQA60(image) {
  var qa   = image.select('QA60');
  // Keep pixels where QA60 < 1024 (both cloud bits are 0).
  var mask = qa.lt(1024);
  return image.updateMask(mask)
              .divide(10000)   // scale DN to reflectance [0–1]
              .copyProperties(image, ['system:time_start']);
}

var col_qa60 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(aoi)
  .filterDate('2021-06-01', '2021-09-01')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
  .map(maskQA60);

Map.addLayer(col_qa60.median(), {bands:['B4','B3','B2'], min:0, max:0.3},
             'QA60 masked composite');

// ============================================================
// METHOD 2: SCL — Scene Classification Layer (SR only)
// ============================================================
// SCL assigns each pixel a land cover / cloud class:
//   1 = saturated / defective
//   2 = dark area / cast shadow
//   3 = cloud shadow
//   4 = vegetation
//   5 = not-vegetated
//   6 = water
//   7 = unclassified
//   8 = cloud (medium probability)
//   9 = cloud (high probability)
//   10 = thin cirrus
//   11 = snow / ice
//
// Keep only classes 4, 5, 6, 11 (clear land + water + snow).
// Exclude: 1, 2, 3, 7, 8, 9, 10.

function maskSCL(image) {
  var scl  = image.select('SCL');
  // Valid pixels: vegetation(4), bare(5), water(6), snow(11).
  var mask = scl.eq(4).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(11));
  return image.updateMask(mask)
              .divide(10000)
              .copyProperties(image, ['system:time_start']);
}

var col_scl = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(aoi)
  .filterDate('2021-06-01', '2021-09-01')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
  .map(maskSCL);

Map.addLayer(col_scl.median(), {bands:['B4','B3','B2'], min:0, max:0.3},
             'SCL masked composite');

// Display the raw SCL of one image for inspection.
var oneImage = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(aoi).filterDate('2021-07-01','2021-07-31')
  .sort('CLOUDY_PIXEL_PERCENTAGE').first();
Map.addLayer(oneImage.select('SCL'),
  {min:1, max:11, palette:['red','black','brown','green','tan','blue',
                            'grey','silver','white','cyan','lightblue']},
  'SCL layer (one image)');

// ============================================================
// METHOD 3: s2cloudless cloud probability
// ============================================================
// 'COPERNICUS/S2_CLOUD_PROBABILITY' is a separate collection
// that provides a per-pixel cloud probability (0–100%).
// Join it to the SR collection to use it as a mask.
// This is the most accurate approach for difficult scenes.

var s2Sr  = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(aoi)
  .filterDate('2021-06-01', '2021-09-01')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30));

var s2Clouds = ee.ImageCollection('COPERNICUS/S2_CLOUD_PROBABILITY')
  .filterBounds(aoi)
  .filterDate('2021-06-01', '2021-09-01');

// Join cloud probability to SR collection by system:index.
var joinCondition = ee.Filter.equals({leftField: 'system:index', rightField: 'system:index'});
var joined = ee.ImageCollection(
  ee.Join.saveFirst('cloud_prob').apply(s2Sr, s2Clouds, joinCondition)
);

var MAX_CLOUD_PROB = 35;  // % — pixels above this are masked

function maskCloudProb(image) {
  var cloudProb = ee.Image(image.get('cloud_prob')).select('probability');
  var mask      = cloudProb.lt(MAX_CLOUD_PROB);
  return image.updateMask(mask)
              .divide(10000)
              .copyProperties(image, ['system:time_start']);
}

var col_prob = joined.map(maskCloudProb);
Map.addLayer(col_prob.median(), {bands:['B4','B3','B2'], min:0, max:0.3},
             's2cloudless masked composite');

// ============================================================
// COMPARISON: Print scene counts
// ============================================================
print('Input scenes:', s2Sr.size());
print('Method comparison — all three composites are now shown on the map.');

// QUESTION: Compare the three composites visually.
//           Which method removes the most cloud contamination?
//           Where does each method fail?

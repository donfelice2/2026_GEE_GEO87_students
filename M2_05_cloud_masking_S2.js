// =============================================================
// M2_05 — Cloud Masking for Sentinel-2
// =============================================================
// Dataset: COPERNICUS/S2_SR
// Area: Stuttgart, Germany

var aoi = ee.Geometry.Polygon(
  [[[8.9, 48.45], [8.9, 48.65], [9.25, 48.65], [9.25, 48.45]]], null, false);
Map.centerObject(aoi, 11);

// ============================================================
// METHOD 1: QA60 bit masking
// ============================================================
// The QA60 band encodes cloud flags as bits.
// Pixels with QA60 >= 1024 have at least one cloud bit set.

// TODO: Write a maskQA60 function that:
//       - Selects the QA60 band
//       - Keeps pixels where QA60 < 1024
//       - Scales DN to reflectance by dividing by 10000
//       - Preserves 'system:time_start' with .copyProperties()


// TODO: Apply maskQA60 to a 2021 Jun–Sep S2_SR collection
//       filtered to the AOI with CLOUDY_PIXEL_PERCENTAGE < 30.
//       Display the median composite as RGB.


// ============================================================
// METHOD 2: SCL (Scene Classification Layer)
// ============================================================
// SCL classes: 4=vegetation, 5=bare, 6=water, 11=snow are clear.
// Classes 3, 8, 9, 10 are cloud shadow/cloud/cirrus — mask these.

// TODO: Write a maskSCL function using the SCL band.
//       Keep only classes 4, 5, 6, 11.
//       Apply it and display the result.


// TODO: Display the raw SCL band of one clear scene to see the
//       classification. Sort by CLOUDY_PIXEL_PERCENTAGE and take .first().


// ============================================================
// METHOD 3: s2cloudless cloud probability
// ============================================================
// Collection: 'COPERNICUS/S2_CLOUD_PROBABILITY' (separate from S2_SR)
// Join it to the SR collection on 'system:index'.

// TODO: Load both collections, join them using ee.Join.saveFirst(),
//       and write a masking function that uses cloud probability < 35%.
//       Display the masked median composite.


// QUESTION: Compare the three composites visually.
//           Which method removes the most cloud contamination?
//           Where does each method fail?

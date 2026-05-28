// =============================================================
// M2_03 — Thresholding: Creating Binary and Classified Images
// =============================================================
// Key concepts:
//   .lt() .gt() .lte() .gte() .eq() – relational operators
//      return a binary image: 1 where true, 0 where false
//   .where(condition, value) – conditional pixel assignment
//   .and() / .or() / .not()  – combine binary images logically 
//   Multi-class thresholding  – build a class map from ranges
//   Histogram inspection      – choose thresholds from the data
//
// Dataset: Landsat 8 TOA + SRTM DEM

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');
var ndvi  = image.normalizedDifference(['B5','B4']).rename('ndvi');

Map.setCenter(9.19, 48.79, 11);
Map.addLayer(ndvi, {min: -0.2, max: 0.8, palette: ['white','green']}, 'NDVI');

// ---- PART 1: Simple binary threshold ------------------------
// Pixels with NDVI > 0.3 are likely vegetation.

//var vegetationMask = 
//Map.addLayer(vegetationMask, {min: 0, max: 1, palette: ['black','darkgreen']}, 'Vegetation mask (NDVI > 0.3)');

// ---- PART 2: Inspect histogram first -------------------------
// Always look at the distribution before choosing a threshold.
// A bimodal histogram (two peaks) indicates a good natural break.

/*
var aoi = image.geometry();
print(ui.Chart.image.histogram({
  image:      ndvi,
  region:     aoi,
  scale:      300,
  maxBuckets: 100
}).setOptions({title: 'NDVI histogram — look for natural breaks'}));
*/

// ---- PART 3: Multi-class thresholding -----------------------
// Build a 3-class map using NDVI ranges:
//   Class 0 = Water / bare     NDVI < 0.0
//   Class 1 = Sparse veg       0.0 ≤ NDVI < 0.3
//   Class 2 = Dense veg        NDVI ≥ 0.3
//
// Pattern: start with base class (0), overwrite with higher classes.

/*
var classified = ee.Image(0)
  .where(ndvi.gte(0.0).and(ndvi.lt(0.3)), 1)
  .where(ndvi.gte(0.3), 2);

Map.addLayer(classified, {min: 0, max: 2,
  palette: ['blue','yellow','darkgreen']}, '3-class NDVI map');
*/


// ---- PART 4: Combining conditions ---------------------------
//var srtm  = ee.Image('CGIAR/SRTM90_V4');
//var slope = ee.Terrain.slope(srtm.select('elevation'));

// Flat land: slope < 2°
//var flat = slope.lt(2);

// Flat AND vegetated → potential agricultural fields.
//var flatVeg = flat.and(vegetationMask);
//Map.addLayer(flatVeg.selfMask(), {palette: ['orange']}, 'Flat + vegetated');

// Low + not vegetated → bare / urban
//var bareFlat = flat.and(vegetationMask.not());
//Map.addLayer(bareFlat.selfMask(), {palette: ['red']}, 'Flat + bare/urban');

// ---- PART 5: .where() for value assignment ------------------
// Assign actual NDVI values only within vegetated pixels;
// set everything else to a NoData fill value (-9999).
//var ndviVegOnly = ndvi.where(vegetationMask.not(), -9999);
// In practice use .updateMask() for display; -9999 is a numeric sentinel.
//Map.addLayer(ndvi.updateMask(vegetationMask), {min: 0.3, max: 0.9, palette: ['yellow','darkgreen']}, 'NDVI (veg only)');

// TIPS:
// .not()            → invert binary mask
// .multiply(value)  → convert boolean to integer class
// .selfMask()       → hide pixels where value == 0
// .updateMask(mask) → hide pixels where mask == 0

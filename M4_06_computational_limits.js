// =============================================================
// M4_06 — Computational Limits: Memory, maxPixels, tileScale
// =============================================================

// Large AOI: Germany-sized region (~800,000 km²)
var aoi_large = ee.Geometry.Polygon(
  [[[5.0, 47.0],[5.0, 55.0],[15.0, 55.0],[15.0, 47.0]]], null, false);

// Small AOI: 50km buffer around Stuttgart
var aoi_small = ee.Geometry.Point([9.19, 48.79]).buffer(50000);

// ============================================================
// PART 1: Reproducing a maxPixels error
// ============================================================

// TODO: Try to export an NDVI image (Landsat 8 median, Jun–Sep 2020)
//       over the large AOI at scale=30.
//       Use the DEFAULT maxPixels (do not set it).
//       What error message do you get in the Tasks tab?
//       Fix it by: (a) raising maxPixels to 1e13, AND (b) coarsening to scale=100.


// ============================================================
// PART 2: Fixing a reduceRegion memory error
// ============================================================

var col = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(aoi_large)
  .filterDate('2020-06-01','2020-09-01')
  .filter(ee.Filter.lt('CLOUD_COVER', 20));
var ndvi = col.median().normalizedDifference(['B5','B4']);

// TODO: Try reduceRegion with scale=30 over aoi_large.
//       It will likely fail or time out. Then fix it three ways:
//       (a) Use scale=1000 instead
//       (b) Add bestEffort: true
//       (c) Add tileScale: 4
//       Print and compare the results.


// ============================================================
// PART 3: Safe vectorisation
// ============================================================

// TODO: Create a binary mask (e.g. NDVI < 0) over aoi_small.
//       Convert to vectors using .reduceToVectors() with:
//       scale=100, maxPixels=1e8, tileScale=2.
//       Print the polygon count.


// ============================================================
// PART 4: Efficient scripting
// ============================================================

// TODO: Rewrite this inefficient snippet:
//   var result = col.map(function(im){
//     return im.normalizedDifference(['B5','B4']);
//   }).filterDate('2020-07-01','2020-07-31').first();
//
// Make it efficient by filtering FIRST, then mapping.


// QUESTION: What does tileScale=4 actually do to memory usage?
//           If tileScale reduces memory per tile, why not always use tileScale=16?

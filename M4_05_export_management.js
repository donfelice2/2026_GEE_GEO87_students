// =============================================================
// M4_05 — Export Management: Drive, Assets, CRS, Pyramiding
// =============================================================

var aoi = ee.Geometry.Polygon(
  [[[8.9, 48.45],[8.9, 48.65],[9.25, 48.65],[9.25, 48.45]]], null, false);

// TODO: Build an S2_SR median composite for the AOI (Jun–Sep 2021,
//       cloud cover < 20%), scaled to reflectance.
//       Compute NDVI from it.


// TODO: Export the NDVI image to Google Drive with:
//       - scale = 10 (S2 native)
//       - crs = 'EPSG:32632' (UTM zone 32N)
//       - maxPixels = 1e9
//       - a descriptive folder and filename
//       Check the Tasks tab and run the export.


// TODO: Export the same NDVI image as a GEE Asset.
//       Use pyramidingPolicy: {ndvi: 'mean'}
//       Replace 'YOUR_USERNAME' with your GEE username.


// TODO: Build a simple FeatureCollection (one polygon = the AOI)
//       and export it to Drive as a Shapefile.


// QUESTION 1: You export a land cover classification raster.
//             Which pyramidingPolicy should you use and why?
//             What happens if you accidentally use 'mean'?

// QUESTION 2: A colleague exports an NDVI image in EPSG:4326.
//             They then measure pixel area in hectares in QGIS
//             and get inconsistent results across the image.
//             Explain why.

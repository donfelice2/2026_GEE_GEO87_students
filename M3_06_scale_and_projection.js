// =============================================================
// M3_06 — Scale, Projection, and Resampling in GEE
// =============================================================

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');
var ndvi  = image.normalizedDifference(['B5','B4']).rename('ndvi');
var aoi   = ee.Geometry.Point([9.19, 48.79]).buffer(5000);
Map.centerObject(aoi, 13);

// ============================================================
// PART 1: Effect of scale on reduceRegion
// ============================================================

// TODO: Compute mean NDVI over the AOI at three different scales:
//       30m, 300m, and 1000m.
//       Print and compare the results.
//       Then switch the reducer to .min() — does the difference grow?


// ============================================================
// PART 2: Inspect native projection
// ============================================================

// TODO: Print the native projection and nominal scale of the NDVI band
//       using .projection() and .projection().nominalScale().


// TODO: Load a Sentinel-2 B4 image and print its native scale.
//       How does it differ from Landsat 8?


// ============================================================
// PART 3: Resampling methods
// ============================================================

// TODO: Create three versions of the NDVI image using
//       .resample('nearestNeighbor'), .resample('bilinear'),
//       and .resample('bicubic').
//       Zoom in close (zoom ~15) and compare how sharp/smooth they look.


// ============================================================
// PART 4: Export with correct CRS and scale
// ============================================================

// TODO: Export the NDVI image with:
//       scale = 30, crs = 'EPSG:32632' (UTM zone 32N)
//       Why is EPSG:32632 better than EPSG:4326 for this region?


// QUESTION: A student runs reduceRegion with scale=10 on a Landsat
//           30m image. What happens? Is the result more accurate?
//           What is the computational cost?

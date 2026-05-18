// =============================================================
// M2_03 — Thresholding: Creating Binary and Classified Images
// =============================================================

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');
Map.setCenter(9.19, 48.79, 11);

// TODO: Compute NDVI (B5, B4) and display it with a green palette.


// TODO: Plot a histogram of NDVI values over the image geometry
//       to identify natural breaks in the distribution.
//       (Hint: ui.Chart.image.histogram)


// TODO: Create a binary vegetation mask: NDVI > 0.3.
//       Display it.


// TODO: Build a 3-class map using .where():
//       Class 0 = NDVI < 0.0   (water/bare)
//       Class 1 = 0.0–0.3      (sparse vegetation)
//       Class 2 = ≥ 0.3        (dense vegetation)
//       Display with a 3-colour palette.


// TODO: Load the SRTM DEM, compute slope, and create a mask
//       for flat areas (slope < 2°).
//       Combine it with the vegetation mask using .and() to
//       find flat vegetated land. Display the result.


// QUESTION: If the histogram of NDVI shows a single peak (unimodal),
//           is simple thresholding still reliable? What would you do instead?

// =============================================================
// 09 - NDVI the Hard Way: Manual Band Arithmetic
// =============================================================
// NDVI = (NIR - Red) / (NIR + Red)
// Landsat 8: NIR = B5, Red = B4

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');

// TODO: Select the Red (B4) and NIR (B5) bands separately.


// TODO: Compute NDVI using .subtract(), .divide(), and .add().


// TODO: Rename the result band to 'NDVI' and display it (min=0, max=1).


// QUESTION: What does an NDVI value close to 0 or negative represent?

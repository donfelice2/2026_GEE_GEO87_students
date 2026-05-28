// =============================================================
// M1 03 - - NDVI as a Reusable Function
// =============================================================

// TODO: Write a function called 'addNdvi' that:
//       - Takes one image as its argument
//       - Computes NDVI with normalizedDifference(['B5', 'B4'])
//       - Returns the image with NDVI added as a new band (.addBands)



var image    = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');
var with_ndvi = addNdvi(image);

// Verify: the output image now has all original bands + 'nd'.
print('Image with NDVI:', with_ndvi);
print('Band names:', with_ndvi.bandNames());

// Display only the NDVI band.
Map.addLayer(with_ndvi, {bands: ['nd'], min: 0, max: 1}, 'NDVI');


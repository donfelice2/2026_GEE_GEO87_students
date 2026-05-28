// =============================================================
// M1 04 - Hello Image: Loading and Displaying a Single Image 
// =============================================================
// Key concepts:
//   ee.Image       – a single raster image (one or many bands)
//   ee.Image.select() – pick one or more bands by name
//   Map.addLayer() – display a layer in the map panel
//   print()        – inspect the image metadata in the Console



// TODO: Load the Sentinel-2 image with ID:
//       'COPERNICUS/S2/20200624T031551_20200624T032157_T48QYD'
//       Store it in a variable called 'image'.


// Display an RGB composite. min/max are in the raw DN range (0–10000).
// Bands B4=Red, B3=Green, B2=Blue.
Map.addLayer(image, {min: 500, max: 2200, bands: ['B4', 'B3', 'B2']}, 'RGB');

// TODO: Print the image object to the Console.


// TODO: Select only the B4 (Red) band and display it separately.


// BONUS: Print the list of all band names with image.bandNames().


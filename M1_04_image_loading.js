// =============================================================
// 03 - Hello Image: Loading and Displaying a Single Image
// =============================================================
// Key concepts:
//   ee.Image       – a single raster image (one or many bands)
//   ee.Image.select() – pick one or more bands by name
//   Map.addLayer() – display a layer in the map panel
//   print()        – inspect the image metadata in the Console

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[107.46582044315535, 16.547334521756277],
          [107.46582044315535, 16.39720487771517],
          [107.7102662439366,  16.39720487771517],
          [107.7102662439366,  16.547334521756277]]], null, false);
/***** End of imports. *****/

// TODO: Load the Sentinel-2 image with ID:
//       'COPERNICUS/S2/20200624T031551_20200624T032157_T48QYD'
//       Store it in a variable called 'image'.


// TODO: Display the image as an RGB composite (B4, B3, B2) with
//       min=500, max=2200. Give the layer a name.


// TODO: Print the image object to the Console.


// TODO: Select only the B4 (Red) band and display it separately.


// BONUS: Print the list of all band names with image.bandNames().


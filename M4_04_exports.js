// =============================================================
// 15 - Exporting: Save a Greenest Pixel Composite to Drive
// =============================================================

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = ee.Geometry.Polygon(
        [[[-6.9488525390625, 53.556626004824615],
          [-6.9488525390625, 53.13688533380001],
          [-6.0205078125,    53.13688533380001],
          [-6.0205078125,    53.556626004824615]]], null, false);
/***** End of imports. *****/

// TODO: Write an addNDVI function for Landsat 8 (B5, B4).


// TODO: Build a greenest-pixel composite for the geometry above
//       using Landsat 8 data from 2015-02-01 to 2015-09-01.
//       Display it as an RGB composite.


// TODO: Export only the NDVI band ('nd') to Google Drive using
//       Export.image.toDrive() with scale=100.
//       Check the Tasks tab and run the export.


// QUESTION: Why might you choose scale=100 for a test export
//           instead of the native 30m resolution?

// =============================================================
// 06 - Styling a Collection: Visualization Parameters
// =============================================================
// Dataset: Landsat 8 TOA — 'LANDSAT/LC08/C02/T1_TOA'

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi =
    ee.Geometry.Polygon(
        [[[-115.32695312499999, 36.61967042308436],
          [-115.32695312499999, 35.19598497202433],
          [-111.98710937499999, 35.19598497202433],
          [-111.98710937499999, 36.61967042308436]]], null, false);
/***** End of imports. *****/

// TODO: Filter the Landsat 8 collection to the AOI, year 2018,
//       bands B1–B7 only (use regex: 'B[1-7]'), and cloud cover < 10%.


// TODO: Define a visualization parameters object (vizParams) that:
//       - Uses a NIR false-colour composite (B5, B4, B3)
//       - Sets min=0.08, max=0.3
//       - Applies gamma correction [0.95, 1.1, 1]


// TODO: Display the first image of the collection using your vizParams.
//       Print it to the Console as well.


// QUESTION: What do bright-red areas in a NIR false colour composite represent?

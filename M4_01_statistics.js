// =============================================================
// 16 - Regional Statistics: reduceRegion()
// =============================================================

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry  = ee.Geometry.Polygon(
        [[[8.927331934261701, 48.620292326512654],
          [8.871027002621076, 48.60485721850843],
          [8.913599024105451, 48.57760728138826],
          [8.986383447933576, 48.546706252554856],
          [9.056421289730451, 48.54761537580736],
          [9.123712549496076, 48.53215805933759],
          [9.206110010433576, 48.61212138652339],
          [9.192377100277326, 48.64661191521426],
          [9.126459131527326, 48.63935271036191],
          [9.049554834652326, 48.620292326512654],
          [8.967157373714826, 48.620292326512654],
          [8.942438135433576, 48.62392343090264]]]);
var geometry3 = ee.Geometry.Point([9.065970364821624, 48.517806393933945]); // Urban
var geometry4 = ee.Geometry.Point([9.052203732252337, 48.5204065241393]);   // Forest
var geometry5 = ee.Geometry.Point([9.166877881601295, 48.479744703733495]); // Water
/***** End of imports. *****/

// TODO: Build a greenest-pixel composite for Stuttgart (2018-02-01 to 2018-09-01).


// TODO: Use reduceRegion(ee.Reducer.mean(), geometry, 100) to compute
//       mean NDVI for the city polygon, the urban point, the forest
//       point, and the water point. Print all results.


// QUESTION: Which land cover type has the highest NDVI and why?
//           What is the expected NDVI range for water pixels?

// =============================================================
// 05 - Filtering an ImageCollection
// =============================================================
// Dataset: Landsat 5 TM TOA — 'LANDSAT/LT05/C02/T2_TOA'
// Cloud cover property: 'CLOUD_COVER'

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[9.8016687061222,  48.08931113072229],
          [9.8016687061222,  47.53597250048694],
          [10.8563562061222, 47.53597250048694],
          [10.8563562061222, 48.08931113072229]]], null, false);
/***** End of imports. *****/

// TODO: Load the Landsat 5 collection and filter it to:
//   - Date range: 1970-02-01 to 1985-09-01
//   - Cloud cover less than 10% (use ee.Filter.lt)
//   - Intersecting the geometry above
// Store the result in a variable called 'collection'.


// TODO: Add the filtered collection to the map and print it.


// QUESTION: How many images are in the filtered collection?
//           (Check the Console after printing.)

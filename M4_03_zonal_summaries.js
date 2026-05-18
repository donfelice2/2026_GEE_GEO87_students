// =============================================================
// 18b - Time-Series Chart with QA-Based Cloud Masking
// =============================================================
// Landsat 8 QA_PIXEL: Bit 3 = cloud shadow, Bit 5 = cloud
// Use (1 << 3) and (1 << 5) to build bitmasks.

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[8.896598820197141, 48.63282126401099],
          [8.896598820197141, 48.45644278829091],
          [9.242668156134641, 48.45644278829091],
          [9.242668156134641, 48.63282126401099]]], null, false);
var geometry2 = ee.Geometry.MultiPoint(
        [[9.019165043341673, 48.56599404075119],
         [8.972957577243278, 48.56276304654744]]);
/***** End of imports. *****/

// TODO: Write a cloud masking function for Landsat 8 that:
//       - Uses the QA_PIXEL band
//       - Masks bit 3 (cloud shadow) and bit 5 (cloud)
//       - Also appends NDVI (normalizedDifference B5, B4)


// TODO: Apply the function to a 2018 Landsat 8 collection
//       (no CLOUD_COVER pre-filter needed). Print the scene count.


// TODO: Create two time-series charts:
//       1. NDVI over the polygon region
//       2. NDVI over the two-point geometry (set scale=30)


// QUESTION: How does the QA-based time series differ from the
//           simple CLOUD_COVER filter approach in script 18a?

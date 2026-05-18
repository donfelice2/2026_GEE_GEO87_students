// =============================================================
// 17a - Masking: selfMask() and updateMask()
// =============================================================

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[34.517107437708, -1.7355142375712174],
          [34.517107437708, -4.006680055924794],
          [36.417742203333, -4.006680055924794],
          [36.417742203333, -1.7355142375712174]]], null, false);
/***** End of imports. *****/

Map.centerObject(geometry);

// TODO: Load the S1 collection (VV+VH, IW, ASCENDING, 10m, 2019-07-01 to
//       2021-02-28) and compute the median VV image. Display it.


// TODO: Apply a threshold of -17 dB to create a binary water mask
//       (1 = water, 0 = land). Display the binary mask.


// TODO: Use .selfMask() to show only the water pixels.
//       Display the result in a different colour.


// TODO: Use .updateMask() to show the actual VV backscatter values
//       only where water was detected.


// QUESTION: What is the difference between selfMask() and updateMask()?
//           When would you use each one?

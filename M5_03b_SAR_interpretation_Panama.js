// =============================================================
// 14c - Exercise: Panama Canal Drought (2023)
// =============================================================
// Build a Sentinel-1 composite for the Panama Canal region to
// visualise the 2023 drought-induced ship queue.
//
// Use two time windows:
//   Period 1: drought peak  → 2023-08-16 to 2023-08-28
//   Period 2: just before   → 2023-08-14 to 2023-08-16

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi =
    ee.Geometry.Polygon(
        [[[-80.11186799142507, 9.566951344073317],
          [-80.11186799142507, 8.714128407376874],
          [-79.33046540353445, 8.714128407376874],
          [-79.33046540353445, 9.566951344073317]]], null, false);
/***** End of imports. *****/

Map.centerObject(aoi);

// TODO: Load and filter the S1 collection for Period 1 (ASCENDING only).


// TODO: Build a 3-band composite: [VH mean, VV mean, VH/VV ratio]
//       Apply focal_median() to reduce speckle.
//       Display it (hint: VH/VV ratio needs different min/max than VH or VV).


// TODO: Load Period 2 and compare mean VH between the two periods.


// TODO: Print the image counts for both periods.

// QUESTION: What SAR backscatter signature do ships have, and why
//           are they easy to detect over water?

// =============================================================
// 21 - Flood Mapping with Sentinel-1: Change Detection
// =============================================================
// October 2020 flood event, Thua Thien-Hue Province, Vietnam.
// Reference period: 2019-02-01 to 2019-09-10 (no flooding)
// Flood period:     2020-10-05 to 2020-10-22

/**** Start of imports ****/
var aoi = ee.FeatureCollection('users/felixgeooperations/GADM_Hue');
/***** End of imports. *****/

Map.centerObject(aoi);

// TODO: Load and filter the S1 collection (IW mode, ASCENDING,
//       10m resolution) and split into reference and flood periods.
//       Compute the median VH for each. Display both.


// TODO: Detect flooded pixels using the DIFFERENCE method:
//       flood VH is LOWER than reference → difference < 0.
//       Apply selfMask() to show only the flooded pixels.


// TODO: Detect flooded pixels using the RATIO method:
//       floodMedian / refMedian < 1 (VH decreased during flood).
//       Display this as a separate layer.


// QUESTION: The original script used .gt(1) for the ratio. Why is
//           that the wrong direction for detecting new water bodies?
//           What does it actually detect?

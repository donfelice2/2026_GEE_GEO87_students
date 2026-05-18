// =============================================================
// 14a - Sentinel-1 SAR: Multi-Temporal Change Detection
// =============================================================
// Dataset: 'COPERNICUS/S1_GRD'
// Polarisation property: 'transmitterReceiverPolarisation'
// Mode filter: instrumentMode = 'IW'
// Pass filter: orbitProperties_pass = 'ASCENDING'

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[11.121814025999697, 48.26565525293623],
          [11.121814025999697, 47.993425552680684],
          [12.051532043577822, 47.993425552680684],
          [12.051532043577822, 48.26565525293623]]], null, false);
/***** End of imports. *****/

Map.centerObject(geometry);

// TODO: Load the S1 collection and filter to:
//       VV+VH dual polarisation, IW mode, ASCENDING pass,
//       10m resolution, and the geometry above.


// TODO: Create two annual subsets (2016 and 2017) and compute
//       the median VH backscatter for each year.


// TODO: Subtract one median from the other (difference image)
//       and display the result (min=-5, max=5).


// TODO: Print the number of scenes in each year.


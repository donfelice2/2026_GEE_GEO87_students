// =============================================================
// 14b - Exercise: Ever Given / Suez Canal (2021-03-23)
// =============================================================
// Use Sentinel-1 to visualise the traffic jam caused by the
// blockage of the Suez Canal. Build a 3-epoch RGB composite:
//   R = median VH before blockage  (2021-03-01 to 2021-03-22)
//   G = median VH during blockage  (2021-03-23 to 2021-03-31)
//   B = median VH after refloating (2021-04-01 to 2021-04-15)

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[30.847273558680392, 32.27506801814437],
          [30.847273558680392, 28.02060110923556],
          [34.36289855868039,  28.02060110923556],
          [34.36289855868039,  32.27506801814437]]], null, false);
/***** End of imports. *****/

Map.centerObject(geometry);

// TODO: Load and filter the S1 collection (same parameters as 14a)
//       over this geometry.


// TODO: Create three date-filtered subsets and compute their
//       median VH backscatter.


// TODO: Stack the three medians into a single 3-band image using
//       .addBands() and display it as an RGB composite (min=-20, max=0).


// TODO: Print the number of scenes in each date window.

// QUESTION: Where do you see the ship traffic jam in the composite?
//           Which channel is it brightest in, and why?

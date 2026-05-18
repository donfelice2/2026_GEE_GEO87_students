// =============================================================
// 13 - Greenest Pixel Composite (qualityMosaic)
// =============================================================
// Dataset: Sentinel-2 L1C — 'COPERNICUS/S2'
// Sentinel-2 band mapping: NIR = B8, Red = B4

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry =
    ee.Geometry.Polygon(
        [[[7.656498060847412,  49.11619854332413],
          [7.656498060847412,  47.270914109261454],
          [10.908451185847412, 47.270914109261454],
          [10.908451185847412, 49.11619854332413]]], null, false);
/***** End of imports. *****/

// TODO: Write an addNDVI function for Sentinel-2 (B8, B4).


// TODO: Filter the S2 collection to 2018, summer months only
//       (May–September, use ee.Filter.calendarRange),
//       cloud cover < 20%, and the geometry above.


// TODO: Map addNDVI over the collection, then create a greenest
//       pixel composite using .qualityMosaic('nd').


// TODO: Display both the raw collection and the greenest-pixel composite.


// QUESTION: Why do we filter to summer months before computing
//           the greenest pixel composite?

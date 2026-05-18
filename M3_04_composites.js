// =============================================================
// 07 - Reducing an ImageCollection to a Single Image
// =============================================================
// Dataset: Landsat 8 TOA — 'LANDSAT/LC08/C02/T1_TOA'

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi =
    ee.Geometry.Polygon(
        [[[6.832746214044709,  49.36887057280064],
          [6.832746214044709,  47.05599549362376],
          [14.65501183904471,  47.05599549362376],
          [14.65501183904471,  49.36887057280064]]], null, false);
/***** End of imports. *****/

// TODO: Filter the Landsat 8 collection to the AOI and date range
//       2015-02-01 to 2015-09-01.


// TODO: Compute mean, median, min, and max composites.
//       Display all four as RGB layers (B4, B3, B2, min=0, max=0.3).


// TODO: Compute the 25th percentile composite using
//       .reduce(ee.Reducer.percentile([25])).
//       Print the band names to see how they are renamed.
//       Display it — remember to use the new band names (e.g. 'B4_p25').


// QUESTION: Why does the median composite look cleaner than the mean
//           over areas with frequent cloud cover?

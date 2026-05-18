// =============================================================
// 17b - Water Mapping with Optical Data: NDWI from Sentinel-2
// =============================================================
// NDWI = (Green - NIR) / (Green + NIR)
// Sentinel-2: Green = B3, NIR = B8

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var AOI =
    ee.Geometry.Polygon(
        [[[32.810701989527786, 34.85869444932843],
          [32.810701989527786, 34.49277849250102],
          [33.313326501246536, 34.49277849250102],
          [33.313326501246536, 34.85869444932843]]], null, false);
/***** End of imports. *****/

// TODO: Load the S2 collection (2020, cloud cover < 20%), compute the
//       median composite, scale to reflectance (/10000), and clip to AOI.
//       Display as RGB.


// TODO: Write an addNDWI function that computes normalizedDifference(['B3','B8'])
//       and returns the clipped result renamed 'ndwi'.


// TODO: Map addNDWI over the collection, take the mean, threshold at > 0,
//       and display the water mask.


// QUESTION: Why might NDWI > 0 produce some false positives (non-water
//           pixels classified as water)? How could you reduce them?

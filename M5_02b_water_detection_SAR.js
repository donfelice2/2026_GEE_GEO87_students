// =============================================================
// 19 - Water Mapping with SAR: Otsu Thresholding + Vectorization
// =============================================================
// Dataset: 'COPERNICUS/S1_GRD', Cyprus AOI, 2021

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var AOI =
    ee.Geometry.Polygon(
        [[[32.19409432351216, 34.99718302639875],
          [32.19409432351216, 34.52446463662405],
          [33.066134118434036, 34.52446463662405],
          [33.066134118434036, 34.99718302639875]]], null, false);
/***** End of imports. *****/

// TODO: Load the S1 collection (VH, IW mode, 2021) and compute
//       the median VH image clipped to the AOI.


// TODO: Compute a histogram using reduceRegion() with
//       ee.Reducer.histogram(50), then display it as a chart
//       with ui.Chart.image.histogram().


// TODO: Implement the Otsu function (provided below) to automatically
//       find the optimal water/land threshold.
//       Apply it to the histogram and print the result.

// --- Otsu function (given — study it, don't just copy-paste) ---
var otsu = function(histogram) {
  var counts  = ee.Array(ee.Dictionary(histogram).get('histogram'));
  var means   = ee.Array(ee.Dictionary(histogram).get('bucketMeans'));
  var size    = means.length().get([0]);
  var total   = counts.reduce(ee.Reducer.sum(), [0]).get([0]);
  var sum     = means.multiply(counts).reduce(ee.Reducer.sum(), [0]).get([0]);
  var mean    = sum.divide(total);
  var indices = ee.List.sequence(1, size);
  var bss = indices.map(function(i) {
    var aCounts = counts.slice(0, 0, i);
    var aCount  = aCounts.reduce(ee.Reducer.sum(), [0]).get([0]);
    var aMeans  = means.slice(0, 0, i);
    var aMean   = aMeans.multiply(aCounts).reduce(ee.Reducer.sum(),[0]).get([0]).divide(aCount);
    var bCount  = total.subtract(aCount);
    var bMean   = sum.subtract(aCount.multiply(aMean)).divide(bCount);
    return aCount.multiply(aMean.subtract(mean).pow(2)).add(
           bCount.multiply(bMean.subtract(mean).pow(2)));
  });
  return means.sort(bss).get([-1]);
};
// ---------------------------------------------------------------

// TODO: Use the Otsu threshold to create a binary water mask.


// TODO: Vectorize the water mask using .reduceToVectors().
//       Add an area property (hectares) to each polygon.
//       Filter to polygons between 10 ha and 10,000 ha.


// TODO: Display the median image, water raster mask, and
//       filtered vector polygons as separate layers.


// QUESTION: Why is automatic thresholding (Otsu) preferable to a
//           fixed threshold for water detection across different regions?

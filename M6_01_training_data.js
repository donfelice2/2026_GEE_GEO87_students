// =============================================================
// 20a - Supervised Classification: CART with Single Sentinel-2 Image
// =============================================================
// Classes (landcover property): 1=Water, 2=Vegetation, 3=Urban, 4=Fields
// Training points are defined in the imports panel above.
// Bands to use: B2, B3, B4, B5, B6, B7, B8, B8A, B11, B12

// TODO: Load the least-cloudy S2_SR image over the ROI for
//       the period 2018-05-01 to 2018-09-30 and display it.


// TODO: Merge the four training FeatureCollections (water, vegetation,
//       urban, fields) into one FeatureCollection.


// TODO: Use .sampleRegions() to extract pixel values from the image
//       at the training point locations (scale=10, keep 'landcover').


// TODO: Train a CART classifier (ee.Classifier.smileCart()) on the
//       training samples with 'landcover' as the class property.
//       Print classifier.explain() to inspect the decision tree.


// TODO: Apply the classifier to the image (.classify()) and display
//       the result with a 4-colour palette.


// QUESTION: What is a potential problem with using all available
//           training data for training without holding any back?

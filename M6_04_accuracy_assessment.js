// =============================================================
// 20d - Classification Using LUCAS Field Survey Data (Austria)
// =============================================================
// Training data: ee.FeatureCollection('users/felixgeooperations/LUCAS_2015_AUT')
// Class property: 'Class' (not 'landcover' as in previous scripts!)
// Study area: Austrian Alps (geometry defined below)

/**** Start of imports ****/
var AUT      = ee.FeatureCollection('users/felixgeooperations/LUCAS_2015_AUT');
var geometry = ee.Geometry.Polygon(
        [[[9.514349141100288, 47.60141471870733],
          [9.514349141100288, 46.851618790481446],
          [10.330084004381538, 46.851618790481446],
          [10.330084004381538, 47.60141471870733]]], null, false);
/***** End of imports. *****/

// TODO: Build the same S2 + S1 feature stack as in 20b/c,
//       but clip to the geometry and use date range 2020-05-01 to 2020-10-30.


// TODO: Filter the LUCAS FeatureCollection to the geometry and display it.


// TODO: Extract samples using sampleRegions() with properties=['Class']
//       and geometries=true.


// TODO: Split 60/40 into train/test, train CART on trainSet (classProperty='Class'),
//       and classify the feature stack (8 classes).
//       Use this palette: ['red','yellow','darkgreen','green','lightgreen','brown','blue','lightblue']


// TODO: Print the RESUBSTITUTION accuracy (classifier.confusionMatrix()) and
//       explain why it is likely overoptimistic.


// TODO: Export the classified image and test points to Drive.


// QUESTION: What is resubstitution accuracy and why should you not
//           report it as your map's accuracy?

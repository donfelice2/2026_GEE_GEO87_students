// =============================================================
// 20c - Classification with Accuracy Assessment
// =============================================================
// Extend script 20b with a proper train/test split and
// accuracy metrics using the confusion matrix.
// Training points are in the imports panel.

// TODO: Rebuild the feature stack from 20b (S2 median + stdDev + S1 median).


// TODO: Extract samples at all training points, then split into
//       training (60%) and testing (40%) using .randomColumn().


// TODO: Train CART on the training set only.
//       Classify the entire image and display the result.


// TODO: Classify the TEST set and compute the confusion matrix:
//       testSet.classify(classifier).errorMatrix('landcover', 'classification')
//       Print: Overall Accuracy, Kappa, Producers Accuracy, Consumers Accuracy.


// QUESTION: What does Kappa > 0.8 mean? What are Producers vs
//           Consumers Accuracy, and why does the distinction matter?

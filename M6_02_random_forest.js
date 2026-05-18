// =============================================================
// M6_02 — Random Forest Classification
// =============================================================
// Training points (water, vegetation, urban, fields, roi) are
// defined in the imports panel.
// Build the same feature stack as M6_01 (S2 + S1).

// TODO: Build the S2 + S1 feature stack (same as M6_01).
//       Use the same band list.


// TODO: Split into 60% training / 40% test using .randomColumn().


// TODO: Train a Random Forest with 100 trees using
//       ee.Classifier.smileRandomForest(100).train(...)


// TODO: Print and visualise the feature importance scores as a bar chart.
//       Which features are most important? Does that make sense?


// TODO: Classify the image and display the result.
//       Compute the confusion matrix on the TEST set and print:
//       Overall Accuracy, Kappa, Producers Accuracy, Consumers Accuracy.


// TODO: Also train a CART classifier on the same data and compare
//       the Overall Accuracy of both. Which is higher?


// QUESTION: Random Forest trains 100 independent decision trees.
//           How does this reduce overfitting compared to a single CART tree?

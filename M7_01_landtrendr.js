// =============================================================
// 22 - LandTrendr: Long-Term Vegetation Disturbance Detection
// =============================================================
// REQUIREMENT: Add the LT-GEE module first:
//   https://code.earthengine.google.com/?accept_repo=users/emaprlab/public
//
// Then load it with:
//   var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js');

// ---- Study area and time window ----------------------------
var coords = [[9.9994, 52.0083],
              [10.0296, 51.3749],
              [11.6748, 51.3749],
              [11.6858, 51.9761],
              [9.9994, 52.0083]];
var aoi = ee.Geometry.Polygon(coords);

// TODO: Define the LandTrendr run parameters (runParams object):
//       maxSegments=6, spikeThreshold=0.9, vertexCountOvershoot=3,
//       preventOneYearRecovery=true, recoveryThreshold=0.25,
//       pvalThreshold=0.05, bestModelProportion=0.75, minObservationsNeeded=6.


// TODO: Define the change detection parameters (changeParams object):
//       delta='loss', sort='greatest', with magnitude > 200,
//       duration < 4 years, preval NDVI > 300, mmu = 11 pixels.


// TODO: Load the LT-GEE module and run ltgee.runLT() with NDVI
//       from 1994 to 2020 (growing season: 06-20 to 09-20).
//       Then call ltgee.getChangeMap() to get the change image.


// TODO: Display the Year of Detection (YOD) and Magnitude of Change
//       layers with a rainbow palette.


// QUESTION: What does a high 'magnitude' value in the change map mean
//           ecologically, and which event type might cause it?

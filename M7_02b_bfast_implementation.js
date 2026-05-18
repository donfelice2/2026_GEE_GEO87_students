// =============================================================
// 23_bfast_2 - BFAST Monitor (Self-Contained)
// =============================================================
// This is the full standalone implementation of BFAST Monitor.
// The bfastMonitor() function is pre-implemented below for reference.
// Your tasks focus on understanding and applying it.
//
// Study area: Bolivia rainforest (roi = Point(-60.00, -14.33))

var roi             = ee.Geometry.Point(-60.00, -14.33);
var historyStart    = '2013-01-01';
var historyEnd      = '2016-12-31';
var monitoringStart = '2017-01-01';
var monitoringEnd   = '2018-12-31';
var h               = 0.25;
var period          = 10;
var alpha           = 0.05;
var magnitudeThreshold = 0;
var harmonics       = 1;

// The bfastMonitor function is provided in the full teacher script.
// Your instructor will share the complete implementation.

// TODO: Call bfastMonitor() with the parameters above.
//       Print the result object and examine its structure.


// TODO: Display the time-of-change image from bfastResults
//       (filter to system:index == '1', take .first()).
//       Use a colour ramp from 2017 to 2018.


// TODO: Change the monitoring period to 2018-01-01 – 2019-12-31
//       and re-run. How do the results change?


// QUESTION: Why does BFAST Monitor merge Landsat 5, 7, and 8?
//           What challenge does the merger create for the analysis?

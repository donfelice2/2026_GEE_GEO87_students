// =============================================================
// 23 - BFAST Monitor: Near-Real-Time Change Detection
// =============================================================
// BFAST Monitor fits a harmonic model to a stable history period
// and tests whether the monitoring period shows a structural break.
//
// External module: require('users/andreim/geeMonitor:monitor.js')
// If unavailable, use script 23_bfast_2 instead.

// TODO: Load the Schwaben district from FAO/GAUL_SIMPLIFIED_500m/2015/level2
//       (ADM2_NAME = 'Schwaben') and sample 100 random points within it.
//       Display the points on the map.


// TODO: Load the external BFAST Monitor module and call bfastMonitor()
//       with the following parameters:
//         roi = the 100 sample points
//         historyStart / End = '2017-01-01' / '2018-12-31'
//         monitoringStart / End = '2019-01-01' / '2020-12-31'
//         h=0.25, period=2, alpha=0.05, magnitudeThreshold=0, harmonics=1


// TODO: Print the result object and display the time-of-change image
//       (index '1' in bfastResults) with a colour palette.


// QUESTION: What does the 'history period' represent in BFAST Monitor,
//           and why must it be a stable (undisturbed) period?

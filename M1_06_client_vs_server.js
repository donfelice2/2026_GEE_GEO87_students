// =============================================================
// M1_06 — Client vs. Server Side in GEE
// =============================================================
// KEY RULE: Variables prefixed with 'ee.' are SERVER-SIDE (lazy proxies).
//           Plain JS values (numbers, strings, arrays) are CLIENT-SIDE.
//           You cannot mix them in if-statements or for-loops.

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');

// ============================================================
// PART 1: Diagnosing the problem
// ============================================================

var cloudCover = image.get('CLOUD_COVER');

// TODO: Print cloudCover. What type does the Console show?
//       Is it a JS number or a server-side object?


// TODO: Try writing: if (cloudCover < 10) { print('clear'); }
//       Run it. Does it behave as expected? Why or why not?
//       (Read the comments in the teacher script before running.)


// ============================================================
// PART 2: Correct approaches
// ============================================================

// TODO: Use .evaluate() with a callback function to retrieve the
//       cloud cover value client-side and print a message depending
//       on whether it is above or below 10%.


// TODO: Use ee.Algorithms.If() to build a server-side conditional
//       that returns 'Clear' or 'Cloudy' based on cloud cover.
//       Print the result.


// ============================================================
// PART 3: Loops vs .map()
// ============================================================

var col = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterDate('2020-01-01','2020-03-01')
  .filterBounds(ee.Geometry.Point([10.0, 48.0]));

// TODO: Explain in a comment why this fails:
//   for (var i = 0; i < col.size(); i++) { ... }


// TODO: Use .map() to add an NDVI band to every image in the collection.
//       Print the first image to confirm 'ndvi' was added.


// ============================================================
// PART 4: getInfo() vs .evaluate()
// ============================================================

// TODO: Use col.size().getInfo() to get the number of images
//       as a plain JS number. Print it.

// QUESTION: When would you use .getInfo() vs .evaluate()?
//           What is the risk of using .getInfo() on a large object?

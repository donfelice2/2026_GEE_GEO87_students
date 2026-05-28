// =============================================================
// M2 04 - Masking: selfMask() and updateMask()
// =============================================================
// Key concepts:
//   .lt(threshold) – creates a binary image: 1 where true, 0 where false
//   .selfMask()    – masks out pixels where the value is 0 (makes them 
//                    transparent); pixels where value=1 remain visible
//   .updateMask()  – applies a binary mask image to another image;
//                    where mask=0 the target image becomes transparent
//
// The distinction:
//   selfMask()    → used on the mask image itself (hides 0-pixels)
//   updateMask()  → used to apply a mask to a *different* image
//                   (e.g. show backscatter values only where water was detected)
//
// Area: Lake Victoria region, East Africa (Tanzania/Kenya border)

Map.centerObject(geometry);

// ---- Load and prepare S1 data --------------------------------
var imageCol = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
  .filter(ee.Filter.eq('instrumentMode', 'IW'))
  .filter(ee.Filter.eq('orbitProperties_pass', 'ASCENDING'))
  .filter(ee.Filter.eq('resolution_meters', 10))
  .filterDate('2019-07-01', '2021-02-28')
  .filterBounds(geometry);

print('S1 collection:', imageCol);

var s1median = imageCol.select('VV').median();
print('Median VV image:', s1median);
Map.addLayer(s1median, {min: -30, max: 0}, 'Median VV');

// ---- Method 1: selfMask() -----------------------------------
// TODO: Apply a threshold of -17 dB to create a binary water mask
//       (1 = water, 0 = land). Display the binary mask.

var water1 = 
Map.addLayer(water1, {palette: ['blue', 'lightgreen']}, 'Binary water mask');

// TODO: Use .selfMask() to show only the water pixels.
//       Display the result in a different colour.

//var waterSelfMasked = 
//Map.addLayer(waterSelfMasked, {palette: ['gold']}, 'selfMask result (water only)');
//print('selfMask result:', waterSelfMasked);



// TODO: Use .updateMask() to show the actual VV backscatter values
//       only where water was detected.
//var water2 = s1median.lt(-17);
//var vvWater = s1median.updateMask(water2);
//Map.addLayer(vvWater, {min: -30, max: -17}, 'updateMask result (VV over water)');
//print('updateMask result:', vvWater);

// QUESTION: What is the difference between selfMask() and updateMask()?
//           When would you use each one?

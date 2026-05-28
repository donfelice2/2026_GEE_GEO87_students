// =============================================================
// M2 02 -  NDVI the Easy Way: normalizedDifference()
// =============================================================

var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_195026_20190419');

// TODO: Compute NDVI using .normalizedDifference(['B5', 'B4'])
//       and display the result (min=0, max=1).


// BONUS: Compute NDWI (water index) using bands B3 and B5 and
//        add it as a separate layer.

//Map.addLayer(ndvi, {min: 0, max: 1}, 'NDVI (normalizedDifference)');

// TIP: The same function works for other indices:
//   NDWI (water)  → normalizedDifference(['B3', 'B5'])
//   NBR  (burn)   → normalizedDifference(['B5', 'B7'])
//   NDSI (snow)   → normalizedDifference(['B3', 'B6'])

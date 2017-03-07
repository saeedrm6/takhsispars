/**
 * Define SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "winkel3",
  "theme": "light",
  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892",
    "outlineThickness": 0.1
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Tehran (4)",
      "latitude": 35.7061,
      "longitude": 51.4358
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Ahvaz (2)",
      "latitude": 31.3363,
      "longitude": 48.6578
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Kish Island (1)",
      "latitude": 26.5326,
      "longitude": 53.9747
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Hamedan (1)",
      "latitude": 34.8052,
      "longitude": 48.5145
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "East Azerbaijan (1)",
      "latitude": 37.3563,
      "longitude": 47.6489
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Kashan (1)",
      "latitude": 33.9863,
      "longitude": 51.4189
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "South Khorasan - Birjand (1)",
      "latitude": 32.8763,
      "longitude": 59.2189
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Razavi Khorasan Province - Lotfabad (1)",
      "latitude": 36.1763,
      "longitude": 58.7389
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Golestan - Incheboron (1)",
      "latitude": 37.4563,
      "longitude": 54.7189
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Venezuela - Maturin (1)",
      "latitude": 9.7363,
      "longitude": -63.1989
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Syria - Hama (1)",
      "latitude": 35.1363,
      "longitude": 36.7589
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 6,
      "scale": 0.5,
      "title": "Uganda (1)",
      "latitude": 1.3363,
      "longitude": 32.2389
    } ]
  },
  "export": {
    "enabled": false
  }
} );

var map = AmCharts.makeChart( "chartdivv", {
  "type": "map",
  "projection": "winkel3",
  "theme": "light",
  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892",
    "outlineThickness": 0.1
  },

  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 15,
  "zoomLongitude": 53,
  "zoomLatitude": 33,
    "images": [ {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Tehran (4)",
      "latitude": 35.7061,
      "longitude": 51.4358
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Ahvaz (2)",
      "latitude": 31.3363,
      "longitude": 48.6578
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Kish Island (1)",
      "latitude": 26.5326,
      "longitude": 53.9747
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Hamedan (1)",
      "latitude": 34.8052,
      "longitude": 48.5145
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "East Azerbaijan (1)",
      "latitude": 37.3563,
      "longitude": 47.6489
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Kashan (1)",
      "latitude": 33.9863,
      "longitude": 51.4189
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "South Khorasan - Birjand (1)",
      "latitude": 32.8763,
      "longitude": 59.2189
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Razavi Khorasan Province - Lotfabad (1)",
      "latitude": 36.1763,
      "longitude": 58.7389
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 0.5,
      "title": "Golestan - Incheboron (1)",
      "latitude": 37.4563,
      "longitude": 54.7189
    } ]
  },
  "export": {
    "enabled": false
  }
  } );
var sketch = {
  "metadata": {
    "width": 693,
    "height": 634,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1075",
    "wsp-build-stamp": "a52eed0e7762/20210510175710",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L01 Colour a Square.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Papyrus\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -41,
          "left": 334,
          "bottom": 593,
          "right": 1027
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(160,160,160)"
          },
          "Interior": {
            "color": "rgb(255,128,0)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 14,
              "color": "blue"
            },
            "Caption": {
              "font-family": "\"Bradley Hand\", sans-serif",
              "font-size": 36,
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 10,
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 14
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 481,
              "y": 43
            }
          },
          "label": "A",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 926,
              "y": 24
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.8 cm",
          "label": "dim",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -18,
              "labelOffsetY": 0
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "3"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "9": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "11",
            "line": "9"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "9",
            "line1": "12"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "13",
            "center": "1"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "15": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "14",
            "1": "11",
            "2": "13",
            "3": "1"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 925,
              "y": 66
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "label": "width",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "7"
          },
          "value": 0.6271604938271588,
          "constraint": "PointOnPath",
          "label": "K",
          "style": {
            "radius": 2
          }
        },
        "18": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "4",
            "obj0": "17"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 3
            }
          },
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "19": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "15",
            "color": "18"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "21"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "20"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "20",
            "p1": "3"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "21"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "26": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "25"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "27": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "26",
            "line": "24"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "24",
            "line1": "27"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "center": "3"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "30": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "29",
            "1": "26",
            "2": "28",
            "3": "3"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "22"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "L",
          "style": {
            "radius": 2
          }
        },
        "32": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "5",
            "obj0": "31"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 21
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "30",
            "color": "32"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "36": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "35"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "20"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "20",
            "p1": "35"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "40": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "39"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "40",
            "line": "38"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "38",
            "line1": "41"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "20"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "44": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "43",
            "1": "40",
            "2": "42",
            "3": "20"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "45": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "36"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "M",
          "style": {
            "radius": 2
          }
        },
        "46": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "21",
            "obj0": "45"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 39
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "47": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "44",
            "color": "46"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "49": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "48",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "49"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "49",
            "p1": "48"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "48",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "49"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "54": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "53"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "54",
            "line": "52"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "56": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "52",
            "line1": "55"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "57": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "56",
            "center": "34"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "58": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "57",
            "1": "54",
            "2": "56",
            "3": "34"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "59": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "N",
          "style": {
            "radius": 2
          }
        },
        "60": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "35",
            "obj0": "59"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 57
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "61": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "58",
            "color": "60"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "48",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "49",
            "p1": "63"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "63",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "62",
            "p1": "48"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "67": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "48",
            "p1": "63"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "68": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "67"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "69": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "68",
            "line": "66"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "70": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "66",
            "line1": "69"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "71": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "70",
            "center": "48"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "72": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "71",
            "1": "68",
            "2": "70",
            "3": "48"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "73": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "64"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "radius": 2
          }
        },
        "74": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "49",
            "obj0": "73"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 75
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "75": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "72",
            "color": "74"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "76": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "77": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "76",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "63",
            "p1": "77"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "79": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "77",
            "p1": "76"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "80": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "76",
            "p1": "62"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "81": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "62",
            "p1": "77"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "82": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "81"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "82",
            "line": "80"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "84": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "80",
            "line1": "83"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "84",
            "center": "62"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "86": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "85",
            "1": "82",
            "2": "84",
            "3": "62"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "87": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "78"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "P",
          "style": {
            "radius": 2
          }
        },
        "88": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "63",
            "obj0": "87"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 93
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "86",
            "color": "88"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "76",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "92": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "77",
            "p1": "91"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "93": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "91",
            "p1": "90"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "94": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "90",
            "p1": "76"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "95": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "76",
            "p1": "91"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "96": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "95"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "97": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "96",
            "line": "94"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "94",
            "line1": "97"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "98",
            "center": "76"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "100": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "99",
            "1": "96",
            "2": "98",
            "3": "76"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "101": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "92"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "radius": 2
          }
        },
        "102": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "77",
            "obj0": "101"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 111
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "103": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "100",
            "color": "102"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "91",
            "p1": "105"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "107": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "105",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "108": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "104",
            "p1": "90"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "109": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "90",
            "p1": "105"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "110": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "109"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "111": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "110",
            "line": "108"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "108",
            "line1": "111"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "90"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "114": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "113",
            "1": "110",
            "2": "112",
            "3": "90"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "106"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "R",
          "style": {
            "radius": 2
          }
        },
        "116": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "91",
            "obj0": "115"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 129
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "117": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "114",
            "color": "116"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "118": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -20,
              "labelOffsetY": 0
            }
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "121": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "119"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "119",
            "p1": "120"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "123": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "120",
            "p1": "118"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "124": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "118",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "125": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "120"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "126": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "125"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "127": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "126",
            "line": "124"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "124",
            "line1": "127"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "4"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "130": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "129",
            "1": "126",
            "2": "128",
            "3": "4"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "131": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "122"
          },
          "value": 0.6271604938271592,
          "constraint": "PointOnPath",
          "label": "S",
          "style": {
            "radius": 2
          }
        },
        "132": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "119",
            "obj0": "131"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 147
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "133": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "130",
            "color": "132"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "8",
            "line1": "124"
          },
          "constraint": "Intersection",
          "label": "T",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "135": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "T'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "135",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "138": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "134",
            "p1": "136"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "139": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "136",
            "p1": "137"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "140": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "137",
            "p1": "135"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "141": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "135",
            "p1": "134"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "142": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "134",
            "p1": "137"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "143": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "142"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "144": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "143",
            "line": "141"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "141",
            "line1": "144"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "center": "134"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "147": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "146",
            "1": "143",
            "2": "145",
            "3": "134"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "148": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "139"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "U",
          "style": {
            "radius": 2
          }
        },
        "149": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "136",
            "obj0": "148"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 165
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "150": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "147",
            "color": "149"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "151": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "23",
            "line1": "141"
          },
          "constraint": "Intersection",
          "label": "V",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "151",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "153": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "151",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "V'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "154": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "151",
            "p1": "153"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "156": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "153",
            "p1": "154"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "157": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "152"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "158": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "152",
            "p1": "151"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "159": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "151",
            "p1": "154"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "160": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "159"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "161": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "160",
            "line": "158"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "158",
            "line1": "161"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "163": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "162",
            "center": "151"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "164": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "163",
            "1": "160",
            "2": "162",
            "3": "151"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "165": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "156"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "W",
          "style": {
            "radius": 2
          }
        },
        "166": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "153",
            "obj0": "165"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 183
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "167": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "164",
            "color": "166"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "37",
            "line1": "158"
          },
          "constraint": "Intersection",
          "label": "Y",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "169": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "168",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "170": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "168",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Y'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "169",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "168",
            "p1": "170"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "173": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "170",
            "p1": "171"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "174": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "171",
            "p1": "169"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "175": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "169",
            "p1": "168"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "168",
            "p1": "171"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "177": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "176"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "177",
            "line": "175"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "179": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "175",
            "line1": "178"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "180": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "179",
            "center": "168"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "181": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "180",
            "1": "177",
            "2": "179",
            "3": "168"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "182": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "173"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "Z",
          "style": {
            "radius": 2
          }
        },
        "183": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "170",
            "obj0": "182"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 201
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "184": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "181",
            "color": "183"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "185": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "51",
            "line1": "175"
          },
          "constraint": "Intersection",
          "label": "A[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "186": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "185",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "187": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "185",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "188": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "186",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "189": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "185",
            "p1": "187"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "190": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "187",
            "p1": "188"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "188",
            "p1": "186"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "186",
            "p1": "185"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "193": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "185",
            "p1": "188"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "194": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "193"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "195": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "194",
            "line": "192"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "196": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "192",
            "line1": "195"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "197": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "196",
            "center": "185"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "198": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "197",
            "1": "194",
            "2": "196",
            "3": "185"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "199": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "190"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "B[1]",
          "style": {
            "radius": 2
          }
        },
        "200": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "187",
            "obj0": "199"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 219
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "201": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "198",
            "color": "200"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "202": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "65",
            "line1": "192"
          },
          "constraint": "Intersection",
          "label": "C[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "203": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "202",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "204": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "202",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "C[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "205": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "203",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "206": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "202",
            "p1": "204"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "207": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "204",
            "p1": "205"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "208": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "205",
            "p1": "203"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "209": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "203",
            "p1": "202"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "210": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "202",
            "p1": "205"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "211": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "210"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "212": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "211",
            "line": "209"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "213": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "209",
            "line1": "212"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "214": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "213",
            "center": "202"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "215": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "214",
            "1": "211",
            "2": "213",
            "3": "202"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "216": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "D[1]",
          "style": {
            "radius": 2
          }
        },
        "217": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "204",
            "obj0": "216"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 240
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "218": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "215",
            "color": "217"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "79",
            "line1": "209"
          },
          "constraint": "Intersection",
          "label": "E[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "220": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "219",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "221": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "219",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "E[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "220",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "223": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "221"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "221",
            "p1": "222"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "225": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "222",
            "p1": "220"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "226": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "220",
            "p1": "219"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "227": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "222"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "228": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "227"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "229": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "228",
            "line": "226"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "230": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "226",
            "line1": "229"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "231": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "230",
            "center": "219"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "232": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "231",
            "1": "228",
            "2": "230",
            "3": "219"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "233": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "224"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "F[1]",
          "style": {
            "radius": 2
          }
        },
        "234": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "221",
            "obj0": "233"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 261
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "235": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "232",
            "color": "234"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "93",
            "line1": "226"
          },
          "constraint": "Intersection",
          "label": "G[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "G[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "239": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "240": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "236",
            "p1": "238"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "241": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "238",
            "p1": "239"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "242": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "239",
            "p1": "237"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "243": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "237",
            "p1": "236"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "244": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "236",
            "p1": "239"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "245": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "244"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "246": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "245",
            "line": "243"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "243",
            "line1": "246"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "248": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "center": "236"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "249": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "248",
            "1": "245",
            "2": "247",
            "3": "236"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "250": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "241"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "H[1]",
          "style": {
            "radius": 2
          }
        },
        "251": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "238",
            "obj0": "250"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 282
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "252": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "249",
            "color": "251"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -23,
              "labelOffsetY": 0
            }
          }
        },
        "255": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "253",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "256": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "119",
            "p1": "254"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "257": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "254",
            "p1": "255"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "258": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "255",
            "p1": "253"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "259": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "253",
            "p1": "119"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "260": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "119",
            "p1": "255"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "261": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "260"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "L[1]",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "262": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "261",
            "line": "259"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "263": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "259",
            "line1": "262"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "264": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "263",
            "center": "119"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "265": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "264",
            "1": "261",
            "2": "263",
            "3": "119"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "266": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "257"
          },
          "value": 0.6271604938271611,
          "constraint": "PointOnPath",
          "label": "I[1]",
          "style": {
            "radius": 2
          }
        },
        "267": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "254",
            "obj0": "266"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 303
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "268": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "265",
            "color": "267"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "269": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "122",
            "line1": "258"
          },
          "constraint": "Intersection",
          "label": "J[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "270": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "269",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "271": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "269",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "J[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "272": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "270",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "273": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "269",
            "p1": "271"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "274": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "271",
            "p1": "272"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "275": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "272",
            "p1": "270"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "276": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "270",
            "p1": "269"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "277": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "269",
            "p1": "272"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "278": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "277"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "279": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "278",
            "line": "276"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "280": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "276",
            "line1": "279"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "281": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "280",
            "center": "269"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "282": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "281",
            "1": "278",
            "2": "280",
            "3": "269"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "283": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "274"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "K[1]",
          "style": {
            "radius": 2
          }
        },
        "284": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "271",
            "obj0": "283"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 324
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "285": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "282",
            "color": "284"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "286": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "156",
            "line1": "275"
          },
          "constraint": "Intersection",
          "label": "M[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "287": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "286",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "288": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "286",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "M[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "289": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "287",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "290": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "286",
            "p1": "288"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "291": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "288",
            "p1": "289"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "292": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "289",
            "p1": "287"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "287",
            "p1": "286"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "294": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "286",
            "p1": "289"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "295": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "294"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "296": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "295",
            "line": "293"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "297": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "293",
            "line1": "296"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "298": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "297",
            "center": "286"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "299": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "298",
            "1": "295",
            "2": "297",
            "3": "286"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "300": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "291"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "N[1]",
          "style": {
            "radius": 2
          }
        },
        "301": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "288",
            "obj0": "300"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 345
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "302": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "299",
            "color": "301"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "303": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "172",
            "line1": "293"
          },
          "constraint": "Intersection",
          "label": "O[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "304": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "303",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "303",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "306": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "304",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "303",
            "p1": "305"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "308": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "305",
            "p1": "306"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "309": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "306",
            "p1": "304"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "310": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "304",
            "p1": "303"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "311": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "303",
            "p1": "306"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "312": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "311"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "313": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "312",
            "line": "310"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "314": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "310",
            "line1": "313"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "315": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "314",
            "center": "303"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "316": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "315",
            "1": "312",
            "2": "314",
            "3": "303"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "317": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "308"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "P[1]",
          "style": {
            "radius": 2
          }
        },
        "318": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "305",
            "obj0": "317"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 366
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "319": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "316",
            "color": "318"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "320": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "189",
            "line1": "310"
          },
          "constraint": "Intersection",
          "label": "Q[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "321": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "322": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Q[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "323": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "321",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "324": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "320",
            "p1": "322"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "325": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "322",
            "p1": "323"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "326": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "323",
            "p1": "321"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "327": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "321",
            "p1": "320"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "328": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "320",
            "p1": "323"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "329": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "328"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "330": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "329",
            "line": "327"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "331": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "327",
            "line1": "330"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "332": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "331",
            "center": "320"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "333": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "332",
            "1": "329",
            "2": "331",
            "3": "320"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "334": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "325"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "R[1]",
          "style": {
            "radius": 2
          }
        },
        "335": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "322",
            "obj0": "334"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 387
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "336": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "333",
            "color": "335"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "337": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "207",
            "line1": "326"
          },
          "constraint": "Intersection",
          "label": "S[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "338": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "337",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "339": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "337",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "S[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "340": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "338",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "341": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "337",
            "p1": "339"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "342": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "339",
            "p1": "340"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "343": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "340",
            "p1": "338"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "344": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "338",
            "p1": "337"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "345": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "337",
            "p1": "340"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "346": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "345"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "347": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "346",
            "line": "344"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "348": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "344",
            "line1": "347"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "349": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "348",
            "center": "337"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "350": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "349",
            "1": "346",
            "2": "348",
            "3": "337"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "351": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "342"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "T[1]",
          "style": {
            "radius": 2
          }
        },
        "352": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "339",
            "obj0": "351"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 408
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "353": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "350",
            "color": "352"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "354": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "223",
            "line1": "344"
          },
          "constraint": "Intersection",
          "label": "U[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "355": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "354",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "356": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "354",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "U[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "357": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "355",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "358": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "354",
            "p1": "356"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "359": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "356",
            "p1": "357"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "360": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "357",
            "p1": "355"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "361": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "355",
            "p1": "354"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "362": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "354",
            "p1": "357"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "363": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "362"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "364": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "363",
            "line": "361"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "365": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "361",
            "line1": "364"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "366": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "365",
            "center": "354"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "367": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "366",
            "1": "363",
            "2": "365",
            "3": "354"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "368": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "359"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "V[1]",
          "style": {
            "radius": 2
          }
        },
        "369": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "356",
            "obj0": "368"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 429
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "370": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "367",
            "color": "369"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "371": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "240",
            "line1": "361"
          },
          "constraint": "Intersection",
          "label": "W[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "372": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "371",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "373": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "371",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "W[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "374": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "372",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "375": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "371",
            "p1": "373"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "376": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "373",
            "p1": "374"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "377": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "374",
            "p1": "372"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "378": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "372",
            "p1": "371"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "379": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "371",
            "p1": "374"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "380": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "379"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "381": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "380",
            "line": "378"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "382": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "378",
            "line1": "381"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "383": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "382",
            "center": "371"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "384": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "383",
            "1": "380",
            "2": "382",
            "3": "371"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "385": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "376"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "X[1]",
          "style": {
            "radius": 2
          }
        },
        "386": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "373",
            "obj0": "385"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 450
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "387": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "384",
            "color": "386"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "388": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "389": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -25,
              "labelOffsetY": 0
            }
          }
        },
        "390": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "388",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "391": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "254",
            "p1": "389"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "392": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "389",
            "p1": "390"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "393": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "390",
            "p1": "388"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "394": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "388",
            "p1": "254"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "395": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "254",
            "p1": "390"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "396": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "395"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "397": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "396",
            "line": "394"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "398": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "394",
            "line1": "397"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "399": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "398",
            "center": "254"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "400": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "399",
            "1": "396",
            "2": "398",
            "3": "254"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "401": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "392"
          },
          "value": 0.6271604938271592,
          "constraint": "PointOnPath",
          "label": "Y[1]",
          "style": {
            "radius": 2
          }
        },
        "402": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "389",
            "obj0": "401"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 471
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "403": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "400",
            "color": "402"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "404": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "273",
            "line1": "394"
          },
          "constraint": "Intersection",
          "label": "Z[1]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "405": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "404",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "406": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "404",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Z[1]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "407": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "405",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "408": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "404",
            "p1": "406"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "409": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "406",
            "p1": "407"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "410": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "407",
            "p1": "405"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "411": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "405",
            "p1": "404"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "412": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "404",
            "p1": "407"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "413": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "412"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "414": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "413",
            "line": "411"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "415": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "411",
            "line1": "414"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "416": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "415",
            "center": "404"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "417": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "416",
            "1": "413",
            "2": "415",
            "3": "404"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "418": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "409"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "A[2]",
          "style": {
            "radius": 2
          }
        },
        "419": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "406",
            "obj0": "418"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 492
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "420": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "417",
            "color": "419"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "421": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "275",
            "line1": "411"
          },
          "constraint": "Intersection",
          "label": "B[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "422": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "421",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "423": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "421",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "B[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "424": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "422",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "425": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "421",
            "p1": "423"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "426": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "423",
            "p1": "424"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "427": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "424",
            "p1": "422"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "428": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "422",
            "p1": "421"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "429": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "421",
            "p1": "424"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "430": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "429"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "431": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "430",
            "line": "428"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "432": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "428",
            "line1": "431"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "433": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "432",
            "center": "421"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "434": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "433",
            "1": "430",
            "2": "432",
            "3": "421"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "435": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "426"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "C[2]",
          "style": {
            "radius": 2
          }
        },
        "436": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "423",
            "obj0": "435"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 513
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "437": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "434",
            "color": "436"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "438": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "308",
            "line1": "427"
          },
          "constraint": "Intersection",
          "label": "D[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "439": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "438",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "440": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "438",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "D[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "441": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "439",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "442": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "438",
            "p1": "440"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "443": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "440",
            "p1": "441"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "444": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "441",
            "p1": "439"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "445": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "439",
            "p1": "438"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "446": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "438",
            "p1": "441"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "447": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "446"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "448": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "447",
            "line": "445"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "449": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "445",
            "line1": "448"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "450": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "449",
            "center": "438"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "451": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "450",
            "1": "447",
            "2": "449",
            "3": "438"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "452": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "443"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "E[2]",
          "style": {
            "radius": 2
          }
        },
        "453": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "440",
            "obj0": "452"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 534
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "454": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "451",
            "color": "453"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "455": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "325",
            "line1": "444"
          },
          "constraint": "Intersection",
          "label": "F[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "456": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "455",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "457": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "455",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "F[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "458": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "456",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "459": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "455",
            "p1": "457"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "460": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "457",
            "p1": "458"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "461": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "458",
            "p1": "456"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "462": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "456",
            "p1": "455"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "463": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "455",
            "p1": "458"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "464": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "463"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "465": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "464",
            "line": "462"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "466": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "462",
            "line1": "465"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "467": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "466",
            "center": "455"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "468": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "467",
            "1": "464",
            "2": "466",
            "3": "455"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "469": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "460"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "G[2]",
          "style": {
            "radius": 2
          }
        },
        "470": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "457",
            "obj0": "469"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 555
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "471": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "468",
            "color": "470"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "472": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "342",
            "line1": "461"
          },
          "constraint": "Intersection",
          "label": "H[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "473": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "472",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "474": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "472",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "475": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "473",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "476": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "472",
            "p1": "474"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "477": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "474",
            "p1": "475"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "478": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "475",
            "p1": "473"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "479": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "473",
            "p1": "472"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "480": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "472",
            "p1": "475"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "481": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "480"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "482": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "481",
            "line": "479"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "483": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "479",
            "line1": "482"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "484": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "483",
            "center": "472"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "485": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "484",
            "1": "481",
            "2": "483",
            "3": "472"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "486": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "477"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "I[2]",
          "style": {
            "radius": 2
          }
        },
        "487": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "474",
            "obj0": "486"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 576
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "488": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "485",
            "color": "487"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "489": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "358",
            "line1": "479"
          },
          "constraint": "Intersection",
          "label": "J[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "490": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "489",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "491": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "489",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "J[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "492": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "490",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "493": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "489",
            "p1": "491"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "494": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "491",
            "p1": "492"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "495": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "492",
            "p1": "490"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "496": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "490",
            "p1": "489"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "497": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "489",
            "p1": "492"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "498": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "497"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "499": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "498",
            "line": "496"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "500": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "496",
            "line1": "499"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "501": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "500",
            "center": "489"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "502": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "501",
            "1": "498",
            "2": "500",
            "3": "489"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "503": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "494"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "K[2]",
          "style": {
            "radius": 2
          }
        },
        "504": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "491",
            "obj0": "503"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 597
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "505": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "502",
            "color": "504"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "506": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "375",
            "line1": "496"
          },
          "constraint": "Intersection",
          "label": "L[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "507": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "506",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "508": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "506",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "L[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "509": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "507",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "510": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "506",
            "p1": "508"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "511": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "508",
            "p1": "509"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "512": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "509",
            "p1": "507"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "513": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "507",
            "p1": "506"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "514": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "506",
            "p1": "509"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "515": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "514"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "516": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "515",
            "line": "513"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "517": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "513",
            "line1": "516"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "518": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "517",
            "center": "506"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "519": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "518",
            "1": "515",
            "2": "517",
            "3": "506"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "520": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "511"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "M[2]",
          "style": {
            "radius": 2
          }
        },
        "521": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "508",
            "obj0": "520"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 618
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "522": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "519",
            "color": "521"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "523": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "389",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "524": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "389",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -28,
              "labelOffsetY": 0
            }
          }
        },
        "525": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "523",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "526": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "389",
            "p1": "524"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "527": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "524",
            "p1": "525"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "528": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "525",
            "p1": "523"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "529": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "523",
            "p1": "389"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "530": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "389",
            "p1": "525"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "531": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "530"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "532": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "531",
            "line": "529"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "533": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "529",
            "line1": "532"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "534": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "533",
            "center": "389"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "535": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "534",
            "1": "531",
            "2": "533",
            "3": "389"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "536": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "527"
          },
          "value": 0.6271604938271588,
          "constraint": "PointOnPath",
          "label": "N[2]",
          "style": {
            "radius": 2
          }
        },
        "537": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "524",
            "obj0": "536"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 639
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "538": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "535",
            "color": "537"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "539": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "408",
            "line1": "529"
          },
          "constraint": "Intersection",
          "label": "O[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "540": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "539",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "541": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "539",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "542": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "540",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "543": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "539",
            "p1": "541"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "544": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "541",
            "p1": "542"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "545": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "542",
            "p1": "540"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "546": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "540",
            "p1": "539"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "547": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "539",
            "p1": "542"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "548": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "547"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "549": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "548",
            "line": "546"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "550": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "546",
            "line1": "549"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "551": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "550",
            "center": "539"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "552": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "551",
            "1": "548",
            "2": "550",
            "3": "539"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "553": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "544"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "P[2]",
          "style": {
            "radius": 2
          }
        },
        "554": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "541",
            "obj0": "553"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 660
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "555": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "552",
            "color": "554"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "556": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "425",
            "line1": "546"
          },
          "constraint": "Intersection",
          "label": "Q[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "557": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "556",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "558": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "556",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Q[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "559": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "557",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Q[2]''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "560": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "556",
            "p1": "558"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "561": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "558",
            "p1": "559"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "562": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "559",
            "p1": "557"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "563": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "557",
            "p1": "556"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "564": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "556",
            "p1": "559"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "565": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "564"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "566": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "565",
            "line": "563"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "567": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "563",
            "line1": "566"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "568": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "567",
            "center": "556"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "569": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "568",
            "1": "565",
            "2": "567",
            "3": "556"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "570": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "561"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "R[2]",
          "style": {
            "radius": 2
          }
        },
        "571": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "558",
            "obj0": "570"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 681
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "572": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "569",
            "color": "571"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "573": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "427",
            "line1": "563"
          },
          "constraint": "Intersection",
          "label": "V[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "574": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "573",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "575": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "573",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "V[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "576": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "574",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "577": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "573",
            "p1": "575"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "578": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "575",
            "p1": "576"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "579": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "576",
            "p1": "574"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "580": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "574",
            "p1": "573"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "581": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "573",
            "p1": "576"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "582": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "581"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "583": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "582",
            "line": "580"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "584": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "580",
            "line1": "583"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "585": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "584",
            "center": "573"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "586": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "585",
            "1": "582",
            "2": "584",
            "3": "573"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "587": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "578"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "W[2]",
          "style": {
            "radius": 2
          }
        },
        "588": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "575",
            "obj0": "587"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 116,
              "y": 702
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "589": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "586",
            "color": "588"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "590": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "460",
            "line1": "579"
          },
          "constraint": "Intersection",
          "label": "X[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "591": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "590",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "592": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "590",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "X[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "593": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "591",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "594": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "590",
            "p1": "592"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "595": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "592",
            "p1": "593"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "596": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "593",
            "p1": "591"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "597": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "591",
            "p1": "590"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "598": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "590",
            "p1": "593"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "599": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "598"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "600": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "599",
            "line": "597"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "601": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "597",
            "line1": "600"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "602": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "601",
            "center": "590"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "603": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "602",
            "1": "599",
            "2": "601",
            "3": "590"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "604": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "595"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "Y[2]",
          "style": {
            "radius": 2
          }
        },
        "605": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "592",
            "obj0": "604"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 4
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "606": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "603",
            "color": "605"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "607": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "476",
            "line1": "597"
          },
          "constraint": "Intersection",
          "label": "Z[2]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "608": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "607",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "609": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "607",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Z[2]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "610": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "608",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "611": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "607",
            "p1": "609"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "612": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "609",
            "p1": "610"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "613": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "610",
            "p1": "608"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "614": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "608",
            "p1": "607"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "615": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "607",
            "p1": "610"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "616": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "615"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "617": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "616",
            "line": "614"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "618": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "614",
            "line1": "617"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "619": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "618",
            "center": "607"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "620": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "619",
            "1": "616",
            "2": "618",
            "3": "607"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "621": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "612"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "A[3]",
          "style": {
            "radius": 2
          }
        },
        "622": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "609",
            "obj0": "621"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 25
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "623": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "620",
            "color": "622"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "624": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "494",
            "line1": "613"
          },
          "constraint": "Intersection",
          "label": "D[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "625": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "626": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "D[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "627": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "625",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "628": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "624",
            "p1": "626"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "629": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "626",
            "p1": "627"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "630": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "627",
            "p1": "625"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "631": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "625",
            "p1": "624"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "632": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "624",
            "p1": "627"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "633": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "632"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "634": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "633",
            "line": "631"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "635": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "631",
            "line1": "634"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "636": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "635",
            "center": "624"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "637": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "636",
            "1": "633",
            "2": "635",
            "3": "624"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "638": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "629"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "E[3]",
          "style": {
            "radius": 2
          }
        },
        "639": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "626",
            "obj0": "638"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 46
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "640": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "637",
            "color": "639"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "641": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "494",
            "line1": "630"
          },
          "constraint": "Intersection",
          "label": "F[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "642": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "641",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "643": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "641",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "F[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "644": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "642",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "645": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "641",
            "p1": "643"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "646": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "643",
            "p1": "644"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "647": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "644",
            "p1": "642"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "648": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "642",
            "p1": "641"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "649": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "641",
            "p1": "644"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "650": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "649"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "651": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "650",
            "line": "648"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "652": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "648",
            "line1": "651"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "653": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "652",
            "center": "641"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "654": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "653",
            "1": "650",
            "2": "652",
            "3": "641"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "655": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "646"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "G[3]",
          "style": {
            "radius": 2
          }
        },
        "656": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "643",
            "obj0": "655"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 67
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "657": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "654",
            "color": "656"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "658": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "524",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "659": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "524",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -30,
              "labelOffsetY": 0
            }
          }
        },
        "660": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "658",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "661": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "524",
            "p1": "659"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "662": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "659",
            "p1": "660"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "663": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "660",
            "p1": "658"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "664": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "658",
            "p1": "524"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "665": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "524",
            "p1": "660"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "666": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "665"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "667": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "666",
            "line": "664"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "668": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "664",
            "line1": "667"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "669": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "668",
            "center": "524"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "670": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "669",
            "1": "666",
            "2": "668",
            "3": "524"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "671": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "662"
          },
          "value": 0.6271604938271592,
          "constraint": "PointOnPath",
          "label": "H[3]",
          "style": {
            "radius": 2
          }
        },
        "672": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "659",
            "obj0": "671"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 88
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "673": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "670",
            "color": "672"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "674": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "544",
            "line1": "663"
          },
          "constraint": "Intersection",
          "label": "I[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "675": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "674",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "676": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "674",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "I[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "677": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "675",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "678": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "674",
            "p1": "676"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "679": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "676",
            "p1": "677"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "680": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "677",
            "p1": "675"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "681": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "675",
            "p1": "674"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "682": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "674",
            "p1": "677"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "683": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "682"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "684": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "683",
            "line": "681"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "685": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "681",
            "line1": "684"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "686": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "685",
            "center": "674"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "687": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "686",
            "1": "683",
            "2": "685",
            "3": "674"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "688": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "679"
          },
          "value": 0.6467592592592593,
          "constraint": "PointOnPath",
          "label": "J[3]",
          "style": {
            "radius": 2
          }
        },
        "689": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "676",
            "obj0": "688"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 109
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "690": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "687",
            "color": "689"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "691": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "560",
            "line1": "681"
          },
          "constraint": "Intersection",
          "label": "K[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "692": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "691",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "693": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "691",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "K[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "694": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "692",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "695": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "691",
            "p1": "693"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "696": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "693",
            "p1": "694"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "697": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "694",
            "p1": "692"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "698": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "692",
            "p1": "691"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "699": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "691",
            "p1": "694"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "700": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "699"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "701": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "700",
            "line": "698"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "702": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "698",
            "line1": "701"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "703": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "702",
            "center": "691"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "704": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "703",
            "1": "700",
            "2": "702",
            "3": "691"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "705": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "696"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "L[3]",
          "style": {
            "radius": 2
          }
        },
        "706": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "693",
            "obj0": "705"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 130
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "707": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "704",
            "color": "706"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "708": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "578",
            "line1": "697"
          },
          "constraint": "Intersection",
          "label": "M[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "709": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "708",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "710": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "708",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "M[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "711": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "709",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "712": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "708",
            "p1": "710"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "713": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "710",
            "p1": "711"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "714": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "711",
            "p1": "709"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "715": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "709",
            "p1": "708"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "716": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "708",
            "p1": "711"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "717": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "716"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "718": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "717",
            "line": "715"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "719": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "715",
            "line1": "718"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "720": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "719",
            "center": "708"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "721": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "720",
            "1": "717",
            "2": "719",
            "3": "708"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "722": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "713"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "N[3]",
          "style": {
            "radius": 2
          }
        },
        "723": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "710",
            "obj0": "722"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 151
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "724": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "721",
            "color": "723"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "725": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "595",
            "line1": "714"
          },
          "constraint": "Intersection",
          "label": "O[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "726": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "725",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "727": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "725",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "728": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "726",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "729": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "725",
            "p1": "727"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "730": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "727",
            "p1": "728"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "731": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "728",
            "p1": "726"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "732": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "726",
            "p1": "725"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "733": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "725",
            "p1": "728"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "734": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "733"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "735": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "734",
            "line": "732"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "736": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "732",
            "line1": "735"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "737": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "736",
            "center": "725"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "738": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "737",
            "1": "734",
            "2": "736",
            "3": "725"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "739": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "730"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "P[3]",
          "style": {
            "radius": 2
          }
        },
        "740": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "727",
            "obj0": "739"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 172
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "741": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "738",
            "color": "740"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "742": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "612",
            "line1": "731"
          },
          "constraint": "Intersection",
          "label": "Q[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "743": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "742",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "744": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "742",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Q[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "745": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "743",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "746": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "742",
            "p1": "744"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "747": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "744",
            "p1": "745"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "748": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "745",
            "p1": "743"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "749": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "743",
            "p1": "742"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "750": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "742",
            "p1": "745"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "751": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "750"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "752": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "751",
            "line": "749"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "753": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "749",
            "line1": "752"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "754": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "753",
            "center": "742"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "755": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "754",
            "1": "751",
            "2": "753",
            "3": "742"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "756": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "747"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "R[3]",
          "style": {
            "radius": 2
          }
        },
        "757": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "744",
            "obj0": "756"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 193
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "758": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "755",
            "color": "757"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "759": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "628",
            "line1": "749"
          },
          "constraint": "Intersection",
          "label": "S[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "760": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "759",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "761": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "759",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "S[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "762": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "760",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "763": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "759",
            "p1": "761"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "764": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "761",
            "p1": "762"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "765": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "762",
            "p1": "760"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "766": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "760",
            "p1": "759"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "767": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "759",
            "p1": "762"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "768": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "767"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "769": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "768",
            "line": "766"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "770": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "766",
            "line1": "769"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "771": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "770",
            "center": "759"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "772": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "771",
            "1": "768",
            "2": "770",
            "3": "759"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "773": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "764"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "T[3]",
          "style": {
            "radius": 2
          }
        },
        "774": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "761",
            "obj0": "773"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 214
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "775": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "772",
            "color": "774"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "776": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "646",
            "line1": "765"
          },
          "constraint": "Intersection",
          "label": "U[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "777": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "776",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "778": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "776",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "U[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "779": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "777",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "780": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "776",
            "p1": "778"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "781": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "778",
            "p1": "779"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "782": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "779",
            "p1": "777"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "783": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "777",
            "p1": "776"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "784": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "776",
            "p1": "779"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "785": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "784"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "786": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "785",
            "line": "783"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "787": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "783",
            "line1": "786"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "788": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "787",
            "center": "776"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "789": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "788",
            "1": "785",
            "2": "787",
            "3": "776"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "790": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "781"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "V[3]",
          "style": {
            "radius": 2
          }
        },
        "791": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "778",
            "obj0": "790"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 235
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "792": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "789",
            "color": "791"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "793": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "659",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "794": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "659",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -32,
              "labelOffsetY": 0
            }
          }
        },
        "795": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "793",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "796": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "659",
            "p1": "794"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "797": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "794",
            "p1": "795"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "798": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "795",
            "p1": "793"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "799": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "793",
            "p1": "659"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "800": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "659",
            "p1": "795"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "801": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "800"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "802": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "801",
            "line": "799"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "803": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "799",
            "line1": "802"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "804": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "803",
            "center": "659"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "805": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "804",
            "1": "801",
            "2": "803",
            "3": "659"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "806": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "797"
          },
          "value": 0.6075617283950623,
          "constraint": "PointOnPath",
          "label": "W[3]",
          "style": {
            "radius": 2
          }
        },
        "807": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "794",
            "obj0": "806"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 256
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "808": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "805",
            "color": "807"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "809": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "679",
            "line1": "798"
          },
          "constraint": "Intersection",
          "label": "X[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "810": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "809",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "811": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "809",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "X[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "812": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "810",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "813": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "809",
            "p1": "811"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "814": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "811",
            "p1": "812"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "815": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "812",
            "p1": "810"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "816": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "810",
            "p1": "809"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "817": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "809",
            "p1": "812"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "818": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "817"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "819": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "818",
            "line": "816"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "820": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "816",
            "line1": "819"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "821": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "820",
            "center": "809"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "822": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "821",
            "1": "818",
            "2": "820",
            "3": "809"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "823": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "814"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "Y[3]",
          "style": {
            "radius": 2
          }
        },
        "824": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "811",
            "obj0": "823"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 277
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "825": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "822",
            "color": "824"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "826": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "695",
            "line1": "816"
          },
          "constraint": "Intersection",
          "label": "Z[3]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "827": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "826",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "828": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "826",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Z[3]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "829": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "827",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "830": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "826",
            "p1": "828"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "831": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "828",
            "p1": "829"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "832": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "829",
            "p1": "827"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "833": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "827",
            "p1": "826"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "834": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "826",
            "p1": "829"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "835": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "834"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "836": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "835",
            "line": "833"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "837": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "833",
            "line1": "836"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "838": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "837",
            "center": "826"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "839": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "838",
            "1": "835",
            "2": "837",
            "3": "826"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "840": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "831"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "A[4]",
          "style": {
            "radius": 2
          }
        },
        "841": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "828",
            "obj0": "840"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 298
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "842": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "839",
            "color": "841"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "843": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "713",
            "line1": "832"
          },
          "constraint": "Intersection",
          "label": "B[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "844": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "843",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "845": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "843",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "B[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "846": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "844",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "847": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "843",
            "p1": "845"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "848": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "845",
            "p1": "846"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "849": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "846",
            "p1": "844"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "850": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "844",
            "p1": "843"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "851": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "843",
            "p1": "846"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "852": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "851"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "853": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "852",
            "line": "850"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "854": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "850",
            "line1": "853"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "855": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "854",
            "center": "843"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "856": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "855",
            "1": "852",
            "2": "854",
            "3": "843"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "857": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "848"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "C[4]",
          "style": {
            "radius": 2
          }
        },
        "858": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "845",
            "obj0": "857"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 319
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "859": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "856",
            "color": "858"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "860": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "729",
            "line1": "850"
          },
          "constraint": "Intersection",
          "label": "D[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "861": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "860",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "862": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "860",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "D[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "863": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "861",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "864": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "860",
            "p1": "862"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "865": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "862",
            "p1": "863"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "866": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "863",
            "p1": "861"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "867": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "861",
            "p1": "860"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "868": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "860",
            "p1": "863"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "869": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "868"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "870": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "869",
            "line": "867"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "871": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "867",
            "line1": "870"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "872": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "871",
            "center": "860"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "873": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "872",
            "1": "869",
            "2": "871",
            "3": "860"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "874": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "865"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "E[4]",
          "style": {
            "radius": 2
          }
        },
        "875": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "862",
            "obj0": "874"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 340
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "876": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "873",
            "color": "875"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "877": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "747",
            "line1": "866"
          },
          "constraint": "Intersection",
          "label": "F[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "878": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "877",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "879": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "877",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "F[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "880": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "878",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "881": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "877",
            "p1": "879"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "882": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "879",
            "p1": "880"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "883": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "880",
            "p1": "878"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "884": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "878",
            "p1": "877"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "885": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "877",
            "p1": "880"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "886": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "885"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "887": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "886",
            "line": "884"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "888": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "884",
            "line1": "887"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "889": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "888",
            "center": "877"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "890": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "889",
            "1": "886",
            "2": "888",
            "3": "877"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "891": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "882"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "G[4]",
          "style": {
            "radius": 2
          }
        },
        "892": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "879",
            "obj0": "891"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 361
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "893": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "890",
            "color": "892"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "894": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "764",
            "line1": "883"
          },
          "constraint": "Intersection",
          "label": "H[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "895": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "894",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "896": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "894",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "897": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "895",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "898": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "894",
            "p1": "896"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "899": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "896",
            "p1": "897"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "900": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "897",
            "p1": "895"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "901": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "895",
            "p1": "894"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "902": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "894",
            "p1": "897"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "903": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "902"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "904": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "903",
            "line": "901"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "905": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "901",
            "line1": "904"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "906": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "905",
            "center": "894"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "907": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "906",
            "1": "903",
            "2": "905",
            "3": "894"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "908": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "899"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "I[4]",
          "style": {
            "radius": 2
          }
        },
        "909": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "896",
            "obj0": "908"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 382
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "910": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "907",
            "color": "909"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "911": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "780",
            "line1": "901"
          },
          "constraint": "Intersection",
          "label": "J[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "912": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "911",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "913": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "911",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "J[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "914": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "912",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "915": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "911",
            "p1": "913"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "916": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "913",
            "p1": "914"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "917": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "914",
            "p1": "912"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "918": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "912",
            "p1": "911"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "919": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "911",
            "p1": "914"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "920": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "919"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "921": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "920",
            "line": "918"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "922": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "918",
            "line1": "921"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "923": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "922",
            "center": "911"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "924": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "923",
            "1": "920",
            "2": "922",
            "3": "911"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "925": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "916"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "K[4]",
          "style": {
            "radius": 2
          }
        },
        "926": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "913",
            "obj0": "925"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 403
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "927": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "924",
            "color": "926"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "928": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "794",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "929": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "794",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''''''''",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "930": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "928",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "931": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "794",
            "p1": "929"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "932": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "929",
            "p1": "930"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "933": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "930",
            "p1": "928"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "934": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "928",
            "p1": "794"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "935": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "794",
            "p1": "930"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "936": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "935"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "937": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "936",
            "line": "934"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "938": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "934",
            "line1": "937"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "939": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "938",
            "center": "794"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "940": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "939",
            "1": "936",
            "2": "938",
            "3": "794"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "941": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "932"
          },
          "value": 0.6271604938271592,
          "constraint": "PointOnPath",
          "label": "L[4]",
          "style": {
            "radius": 2
          }
        },
        "942": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "929",
            "obj0": "941"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 424
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "943": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "940",
            "color": "942"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "944": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "814",
            "line1": "933"
          },
          "constraint": "Intersection",
          "label": "M[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "945": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "944",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "946": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "944",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "M[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "947": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "945",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "948": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "944",
            "p1": "946"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "949": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "946",
            "p1": "947"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "950": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "947",
            "p1": "945"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "951": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "945",
            "p1": "944"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "952": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "944",
            "p1": "947"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "953": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "952"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "954": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "953",
            "line": "951"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "955": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "951",
            "line1": "954"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "956": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "955",
            "center": "944"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "957": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "956",
            "1": "953",
            "2": "955",
            "3": "944"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "958": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "949"
          },
          "value": 0.6663580246913581,
          "constraint": "PointOnPath",
          "label": "N[4]",
          "style": {
            "radius": 2
          }
        },
        "959": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "946",
            "obj0": "958"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 445
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "960": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "957",
            "color": "959"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "961": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "830",
            "line1": "951"
          },
          "constraint": "Intersection",
          "label": "O[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "962": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "961",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "963": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "961",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "O[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "964": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "962",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "965": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "961",
            "p1": "963"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "966": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "963",
            "p1": "964"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "967": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "964",
            "p1": "962"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "968": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "962",
            "p1": "961"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "969": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "961",
            "p1": "964"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "970": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "969"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "971": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "970",
            "line": "968"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "972": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "968",
            "line1": "971"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "973": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "972",
            "center": "961"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "974": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "973",
            "1": "970",
            "2": "972",
            "3": "961"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "975": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "966"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "P[4]",
          "style": {
            "radius": 2
          }
        },
        "976": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "963",
            "obj0": "975"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 466
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "977": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "974",
            "color": "976"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "978": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "847",
            "line1": "968"
          },
          "constraint": "Intersection",
          "label": "Q[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "979": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "978",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "980": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "978",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Q[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "981": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "979",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "982": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "978",
            "p1": "980"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "983": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "980",
            "p1": "981"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "984": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "981",
            "p1": "979"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "985": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "979",
            "p1": "978"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "986": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "978",
            "p1": "981"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "987": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "986"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "988": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "987",
            "line": "985"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "989": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "985",
            "line1": "988"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "990": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "989",
            "center": "978"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "991": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "990",
            "1": "987",
            "2": "989",
            "3": "978"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "992": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "983"
          },
          "value": 0.6859567901234568,
          "constraint": "PointOnPath",
          "label": "R[4]",
          "style": {
            "radius": 2
          }
        },
        "993": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "980",
            "obj0": "992"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 487
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "994": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "991",
            "color": "993"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "995": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "864",
            "line1": "985"
          },
          "constraint": "Intersection",
          "label": "S[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "996": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "995",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "997": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "995",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "S[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "998": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "996",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "999": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "995",
            "p1": "997"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1000": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "997",
            "p1": "998"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1001": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "998",
            "p1": "996"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1002": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "996",
            "p1": "995"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1003": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "995",
            "p1": "998"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1004": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1003"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "1005": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "1004",
            "line": "1002"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1006": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "1002",
            "line1": "1005"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1007": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1006",
            "center": "995"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1008": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "1007",
            "1": "1004",
            "2": "1006",
            "3": "995"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "1009": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1000"
          },
          "value": 0.7055555555555556,
          "constraint": "PointOnPath",
          "label": "T[4]",
          "style": {
            "radius": 2
          }
        },
        "1010": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "997",
            "obj0": "1009"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 508
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "1011": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "1008",
            "color": "1010"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "1012": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "882",
            "line1": "1001"
          },
          "constraint": "Intersection",
          "label": "U[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "1013": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1012",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1014": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1012",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "U[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "1015": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1013",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1016": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1012",
            "p1": "1014"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1017": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1014",
            "p1": "1015"
          },
          "constraint": "Segment",
          "label": "j",
          "style": {
            "width": 1
          }
        },
        "1018": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1015",
            "p1": "1013"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1019": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1013",
            "p1": "1012"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1020": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1012",
            "p1": "1015"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1021": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1020"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "1022": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "1021",
            "line": "1019"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1023": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "1019",
            "line1": "1022"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1024": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1023",
            "center": "1012"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1025": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "1024",
            "1": "1021",
            "2": "1023",
            "3": "1012"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "1026": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1017"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "V[4]",
          "style": {
            "radius": 2
          }
        },
        "1027": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1014",
            "obj0": "1026"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 529
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "1028": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "1025",
            "color": "1027"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "1029": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "899",
            "line1": "1018"
          },
          "constraint": "Intersection",
          "label": "W[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "1030": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1029",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1031": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1029",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "W[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "1032": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1030",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1033": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1029",
            "p1": "1031"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1034": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1031",
            "p1": "1032"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1035": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1032",
            "p1": "1030"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1036": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1030",
            "p1": "1029"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1037": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1029",
            "p1": "1032"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1038": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1037"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "1039": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "1038",
            "line": "1036"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1040": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "1036",
            "line1": "1039"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1041": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1040",
            "center": "1029"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1042": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "1041",
            "1": "1038",
            "2": "1040",
            "3": "1029"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "1043": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1034"
          },
          "value": 0.7447530864197531,
          "constraint": "PointOnPath",
          "label": "X[4]",
          "style": {
            "radius": 2
          }
        },
        "1044": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1031",
            "obj0": "1043"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 550
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "1045": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "1042",
            "color": "1044"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        },
        "1046": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "915",
            "line1": "1036"
          },
          "constraint": "Intersection",
          "label": "Y[4]",
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "1047": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1046",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1048": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1046",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Y[4]'",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "1049": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1047",
            "distance": "2"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1050": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1046",
            "p1": "1048"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1051": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1048",
            "p1": "1049"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1052": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1049",
            "p1": "1047"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1053": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1047",
            "p1": "1046"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "1054": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1046",
            "p1": "1049"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1055": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1054"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "white",
            "radius": 2
          }
        },
        "1056": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "1055",
            "line": "1053"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "1057": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "1053",
            "line1": "1056"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1058": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1057",
            "center": "1046"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "1059": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "1058",
            "1": "1055",
            "2": "1057",
            "3": "1046"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 0
          }
        },
        "1060": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "1051"
          },
          "value": 0.7251543209876543,
          "constraint": "PointOnPath",
          "label": "Z[4]",
          "style": {
            "radius": 2
          }
        },
        "1061": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1048",
            "obj0": "1060"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 220,
              "y": 571
            }
          },
          "style": {
            "hidden": true,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "1062": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "1059",
            "color": "1061"
          },
          "colorRange": "LimitToRange",
          "colorModel": "UnivariateHue",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeUnivariate",
          "style": {
            "color": "red",
            "layerOrder": 1
          }
        }
      }
    }
  ]
};
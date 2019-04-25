var myConfig1 = {
  "type":"nestedpie",
  "title":{
    "text":"Popularity within age groups"
  },
  "legend":{
    "border-width":1,
    "border-color":"gray",
    "border-radius":"5px",
    "line-style":"dashdot",
    "header":{
      "text":"Ages",
      "font-family":"Georgia",
      "font-size":12,
      "font-color":"purple",
      "font-weight":"normal"
    },
    "item":{
      "font-color":"black",
      "font-family":"Georgia"
    },
    "marker":{
      "type":"circle"
    },
    "toggle-action":"remove",
    "minimize":true,
    "drag-handler":"icon",
    "icon":{
      "line-color":"orange"
    }
  },
  "plot":{
    "animation":{
 	    "on-legend-toggle": false, //set to true to show animation and false to turn off
 	    "effect": 5,
 	    "method": 1,
 	    "sequence": 1,
 	    "speed": 700
    },
    "value-box":{
      "text":"%data-year",
      "font-color":"white",
      "font-family":"Georgia",
      "font-size":12,
      "font-weight":"normal",
      "rules":[
        {
          "rule":"%p != 0",
          "visible":false
        }
      ]
    },
    "data-year":["Poroshenko","Timoshenko","Zelenski"],
    "tooltip":{
      "text":"%data-year Ages %t: %v%", //added token
      "font-color":"black",
      "font-family":"Georgia",
      "font-size":12,
      "background-color":"white",
      "border-width":1,
      "border-color":"gray",
      "border-radius":"3px",
      "line-style":"dashdot",
      "padding":"10%",
      "text-alpha":1,
      "alpha":0.7
    },
    "alpha":0.8,
    "shadow":false,
    "border-width":1,
    "border-color":"white",
    "slice-start":"30%",
  },
  "series": [
    {
      "values":[14,7,57],
      "background-color":"orange red",
      "text":"18-29",
      "tooltip-text":"Ages %t: %v",
    },
    {
      "values":[17,10,45],
      "background-color":"yellow orange",
      "text":"30-39"
    },
    {
      "values":[18.5,12,36],
      "background-color":"green blue",
      "text":"40–49"
    },
    {
      "values":[19,18,22],
      "background-color":"blue purple",
      "text":"50–59"
    },
    {
      "values":[18,19,12.5],
      "background-color":"purple red",
      "text":"60 and over"
    }
  ]
};

zingchart.render({
	id : 'myChart1',
	data : myConfig1,
	height: 500,
	width: 700
});


/// Map Zing chart

var aColorRange = ['#D36A67','#E5896C','#F9BC7F','#F9DEA7','#9CD8B1','#91BAA0','#389B96','#425B5E'];
var aDomain = [100000,40000000]; // [mix,max]
zingchart.loadModules('maps,maps-usa');
zingchart.render({
  "id":'myMaps',
  "width": 800,
  "height": 800,
  "modules":'choropleth',
  "data":{
    "title":{
      "text":"Population By Province",
      "align":"left",
      "font-size":14
    },
    "choropleth":{
      "legend":{
        "header":{
          "text":"Population Range"
        },
        "item":{
          "cursor":"pointer",
        },
        "marker":{
          "cursor":"pointer"
        },
        "align":"left",
        "vertical-align":'bottom',
        "items":[
          {
            "text":" > 100,000"
          }
        ]
      }
    },
    "shapes": [
      {
        "type": "zingchart.maps",
        "options":{
          "name": "usa",
          "zoom":1.1,
          "scale":{
            "type":"quantize", //if you define threshold here your domain length must match your range length
            "domain":aDomain, //[min,max]
            "range":aColorRange
          },
          "style":{
            "label":{ // text displaying. Like valueBox
              "visible":true,
              "font-size":8
            },
            "controls":{
              placement: 'br'
            },
            "hover-state":{
              "background-color": "transparent",
              "border-width":2,
              "border-color": "#000"
            },
            "tooltip":{
              "background-color":"inherit",
              "font-color":"#000",
              "font-size":15,
              "border-width":2,
              "border-color":"#FFF"
            },
            "items":{
              "CA":{
                "value":38332521
              },
              "OR":{
                "value":3930065
              },
              "WA":{
                "value":6971406
              },
              "NV":{
                "value":2790136
              },
              "ID":{
                "value":1612136
              },
              "UT":{
                "value":2900872
              },
              "AZ":{
                "value":6626624
              },
              "MT":{
                "value":1015165
              },
              "WY":{
                "value":582658
              },
              "CO":{
                "value":5268367
              },
              "NM":{
                "value":2085287
              },
              "AK":{
                "value":735132
              },
              "HI":{
                "value":1404054
              },
              "TX":{
                "value":26448193
              },
              "OK":{
                "value":3850568
              },
              "KS":{
                "value":2893957
              },
              "NE":{
                "value":1868516
              },
              "SD":{
                "value":844877
              },
              "ND":{
                "value":723393
              },
              "MN":{
                "value":5420380
              },
              "IA":{
                "value":3090416
              },
              "MO":{
                "value":6044171
              },
              "AR":{
                "value":2959373
              },
              "LA":{
                "value":4625470
              },
              "MS":{
                "value":2991207
              },
              "TN":{
                "value":6495978
              },
              "KY":{
                "value":4395295
              },
              "IL":{
                "value":12882135
              },
              "WI":{
                "value":5742713
              },
              "MI":{
                "value":9895622
              },
              "IN":{
                "value":6570902
              },
              "AL":{
                "value":4833722
              },
              "GA":{
                "value":9992167
              },
              "FL":{
                "value":19552860
              },
              "SC":{
                "value":4774839
              },
              "NC":{
                "value":9848060
              },
              "VA":{
                "value":8260405
              },
              "WV":{
                "value":1854304
              },
              "OH":{
                "value":11570808
              },
              "PA":{
                "value":12773801
              },
              "DC":{
                "value":681170
              },
              "MD":{
                "value":5928814
              },
              "DE":{
                "value":925749
              },
              "NJ":{
                "value":8899339
              },
              "NY":{
                "value":19651127
              },
              "CT":{
                "value":3596080
              },
              "RI":{
                "value":1051511
              },
              "MA":{
                "value":6692824
              },
              "VT":{
                "value":626630
              },
              "NH":{
                "value":1323459
              },
              "ME":{
                "value":1328302
              }
            }
          }
        }
      }
    ]
  }
});

// Used to only bind events once. When the window re-sizes we don't need to overwrite the events
var firstTimeLoad = true;

/* custom module for choropleth charts */
zingchart.defineModule("choropleth", "plugin", function (originalJson) {
  console.log('rendering');
	if (originalJson.shapes[0].options) {
		var options = originalJson.shapes[0].options;
		var mapType = options.name;
		var scaleType = options.scale.type;
		var range = options.scale.range;
		var domain = generateDomain(scaleType, options.scale.domain, range);
		var scaleFunction = (scaleType == "quantize" ? quantize : threshold);

		// Initialize items object
		var items = {};
		// Iterate over options items
		for (var key in options.style.items) {
			var item = options.style.items[key];
			var name = item.name;
			var value = item.value;
			var rangeIndex = scaleFunction(value, domain, range);
	    var keyInfo = zingchart.maps.getItemInfo(options.name, key)
			item["background-color"] = rangeIndex.range;
			item["original-background-color"] = rangeIndex.range;
			item["domain"] = rangeIndex.domain;
			item['tooltip'] = options.style.tooltip ? JSON.parse(JSON.stringify(options.style.tooltip)) : {};
			item['tooltip']['text'] = keyInfo.tooltip.text + " <br>" + item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			item['group'] = rangeIndex.group + 1;

			// border color, font-color and background color can inherit
			if (item['tooltip']['border-color'] == 'inherit')
			  item['tooltip']['border-color'] = rangeIndex.range;
			if (item['tooltip']['background-color'] == 'inherit')
			  item['tooltip']['background-color'] = rangeIndex.range;
			if (item['tooltip']['font-color'] == 'inherit')
			  item['tooltip']['font-color'] = rangeIndex.range;
		}

		// Draw the legend
		if (originalJson.choropleth.legend){
		  drawLegend(domain, range, originalJson);

      // only bind events on first load
      if (firstTimeLoad) {
		    zingchart.bind(null,'legend_item_click', legendClickForMaps);
		    zingchart.bind(null,'legend_marker_click', legendClickForMaps);
        firstTimeLoad = false;
      }
		}

		return originalJson;
	}
	else {
		console.error("Whoa there... You need an `options` object to set the styles.");
	}

	function legendClickForMaps(e){
    var clickedDomain = e.xdata.domain;
    var plotIsVisible = e.xdata.visible;
    var plotIndex = e.plotindex;
    var json = zingchart.exec(e.id,'getdata');
    json = json.graphset ? json.graphset[0] : json;
    var items = json.shapes;
    var toggleOffColor = '#c3c3c3';
    e.xdata.visible = !e.xdata.visible;

    for (var i=0; i < items.length; i++) {
      if (clickedDomain == items[i].domain) {
	      if (plotIsVisible) {
          items[i]['background-color'] = toggleOffColor;
	      } else {
	        items[i]['background-color'] = items[i]['original-background-color'];
	      }
	      zingchart.exec(e.id, 'updateobject', {
	        'type':'shape',
	        'data': items[i]
	      });
      }
    }
	}

	function drawLegend(domain, range, json){
	  if (!json.series)
	    json.series = [];

	  json.legend = json.choropleth.legend || {};
	  for(var i=0; i < domain.length; i++){
	    json.series[i] = {
	      /*
	       * merge text if user wants to define new text.
	       * else format thousands separator
	       */
  	    'text': (json.legend.items && json.legend.items[i] && json.legend.items[i].text) ? json.legend.items[i].text : Math.round(domain[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  	    'line-color':range[i],
  	    'background-color':range,
  	    'data-domain':domain[i],
  	    'data-visible':true
  	  };
	  }
	}

	function leftOrRight (value, left, right) {
  	var leftDiff = Math.abs(value - left);
  	var rightDiff = Math.abs(value - right);
  	return leftDiff < rightDiff ? true : false
  }

  function isBetween (value, left, right) {
  	return value > left && value < right;
  }

  function quantizeIndex (value, scale) {
  	var first = scale[0];
  	var last = scale[scale.length-1];
  	for (var i=0; i<scale.length; i++) {
  		if (value <= first) {
  			return 0;
  		}
  		else if (value >= last) {
  			return scale.length-1;
  		}
  		else if (i < scale.length-1) {
  			if (value == scale[i]) {
  				return i;
  			}
  				else {
  				var current = scale[i];
  				var next = scale[i+1];
  				if (isBetween(value, current, next)) {
  					return leftOrRight(value, current, next) ? i : i+1;
  				}
  			}
  		}
  	}
  }

  function thresholdIndex (value, scale) {
  	for (var i=0; i<scale.length; i++) {
  		if (value < scale[i]) {
  			return i;
  		}
  	}
  	return scale.length;
  }

  // define mix max for domain
  function quantize (value, domain, range) {
  	var index = quantizeIndex(value,domain);
  	return {
  	  "range":range[index],
  	  "domain":domain[index],
  	  "group":index
  	}
  }

  // define a range of thresholds for domain
  function threshold (value, domain, range) {
  	var index = thresholdIndex(value, domain);
  	return {
  	  "range":range[index],
  	  "domain":domain[index],
  	  "group":index
  	}
  }

  function quantizeDomain (aDomain, aRange) {
  	var iMin = aDomain[0];
  	var iMax = aDomain[1];
  	var iSlope = (iMax-iMin)/(aRange.length-1);
  	var aScale = [];
  	for (var i=0; i<aRange.length; i++) {
  		aScale[i] = (iSlope*i + iMin);
  	}
  	return aScale;
  }

  function generateDomain (sType, aDomain, aRange) {
  	var aScale = aDomain;
  	if (sType == 'quantize') {
  		aScale = quantizeDomain(aDomain, aRange)
  	}
  	return aScale;
  }
});

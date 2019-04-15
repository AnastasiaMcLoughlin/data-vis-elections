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
	height: '100%',
	width: '100%'
});

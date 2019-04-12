/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Increase contrast by taking evey second color
chart.colors.step = 2;

// Add data
chart.data = generateChartData();

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;

// Create series
function createAxisAndSeries(field, name, opposite, bullet) {
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "% of votes";
  series.dataFields.dateX = "date";
  series.strokeWidth = 2;
  series.yAxis = valueAxis;
  series.name = name;
  series.tooltipText = "{name}: [bold]{valueY}[/]";
  series.tensionX = 0.8;

  var interfaceColors = new am4core.InterfaceColorSet();

  switch(bullet) {
    case "triangle":
      var bullet = series.bullets.push(new am4charts.Bullet());
      bullet.width = 12;
      bullet.height = 12;
      bullet.horizontalCenter = "middle";
      bullet.verticalCenter = "middle";

      var triangle = bullet.createChild(am4core.Triangle);
      triangle.stroke = interfaceColors.getFor("background");
      triangle.strokeWidth = 2;
      triangle.direction = "top";
      triangle.width = 12;
      triangle.height = 12;
      break;
    case "rectangle":
      var bullet = series.bullets.push(new am4charts.Bullet());
      bullet.width = 10;
      bullet.height = 10;
      bullet.horizontalCenter = "middle";
      bullet.verticalCenter = "middle";

      var rectangle = bullet.createChild(am4core.Rectangle);
      rectangle.stroke = interfaceColors.getFor("background");
      rectangle.strokeWidth = 2;
      rectangle.width = 10;
      rectangle.height = 10;
      break;
    default:
      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = interfaceColors.getFor("background");
      bullet.circle.strokeWidth = 2;
      break;
  }

  valueAxis.renderer.line.strokeOpacity = 1;
  valueAxis.renderer.line.strokeWidth = 2;
  valueAxis.renderer.line.stroke = series.stroke;
  valueAxis.renderer.labels.template.fill = series.stroke;
  valueAxis.renderer.opposite = opposite;
  valueAxis.renderer.grid.template.disabled = true;
}

createAxisAndSeries("Zelenski", "Zelenski", false, "circle");
createAxisAndSeries("Timoshenko", "Timoshenko", true, "triangle");
createAxisAndSeries("Poroshenko", "Poroshenko", true, "rectangle");

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();

// generate some random data, quite different range
function generateChartData() {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 100);
  firstDate.setHours(0, 0, 0, 0);
/// starting number
  var visits = 7.6;
  var hits = 13.4;
  var views = 7;

  var myData = {
      Zelenski: [7.6, 9.4, 8, 8.8, 9, 9.4, 10.8, 10.9, 11.9, 14.9, 15.2, 16.4, 17.5, 19.6, 19.9, 20.3, 23.1],
      Timoshenko: [13.4, 14.7, 14, 14.8, 14.2, 14.4, 13.4, 15.5, 15.1, 12.9, 9.6, 11.5, 13.5, 13.8, 13.9, 14],
      Poroshenko: [7, 6.2, 8, 8.1, 8.6, 10.8, 7.7, 8.2, 10.4, 10.1, 10.8, 13.1, 13.1, 13.4, 13.1, 12.4]
  }
  var mynewuselessvar;
  for (var i = 0; i < myData.candidate1.length; i++) {
      chartData.push({
        date: ["1st Nov", "22nd Nov", "3rd Dec","14th Dec", "18th Dec", "29th Dec", "3rd Jan", "15th Jan", "25th Jan", "4th Feb", "20th Feb", "27th Feb", "4th March", "7th March", "14th March"],
        visits: myData.Zelenski[i],
        hits: myData.Timoshenko[i],
        views: myData.Poroshenko[i]
      });
  }


  // for (var i = 0; i < 15; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using chart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    // var newDate = new Date(firstDate);
    // newDate.setDate(newDate.getDate() + i);
    //
    // visits =
    // hits = Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    // views = Math.round((Math.random()<0.5?1:-1)*Math.random()*10);


  // }
  return chartData;
}

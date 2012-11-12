// Load the Visualization API and the piechart package.
    google.load('visualization', '1', {'packages':['corechart']});
      
    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);
    
    var chart;
    var data;

    function drawChart() {
      	var jsonData = $.ajax({
          	url: "data/statementcoverage.json",
          	dataType:"json",
          	contentType:"application/x-www-form-urlencoded; charset=UTF-8",
          	async: false
          	}).responseText;
    	// Create our data table out of JSON data loaded from server.
      	data = new google.visualization.DataTable(jsonData);

      	// Set chart options
      	var options = 	{	
      						title: "Code Coverage Statistics",
      						height: 500,
      						vAxes:[
      							{
      								format: '##.##%',
      								maxValue: 1
      							},
      							{
      								baseline: 0.5,
      								baselineColor: 'Green',
									maxValue: 1,
									minValue: 0,
									format: '##.##%'
      							}
      						],
      						series: {
      							3: {
      								targetAxisIndex:1
      							}
      						},
      						hAxis: 	{
      							minTextSpacing:0,
      							textStyle: 	{
      								fontSize:13
      							}
      						}
      					};

      	// Instantiate and draw our chart, passing in some options.
      	chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      	chart.draw(data, options);

      	google.visualization.events.addListener(chart,'select', selectHandler);
    }

    function selectHandler(){
    	var selection = chart.getSelection();
    	console.log(selection[0].row);
    }
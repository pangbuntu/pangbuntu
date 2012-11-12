$(function () {
   var chart;
   $(document).ready(function() {
      // Define the options for the chart
      var options = {

      };

      $.ajax({
         url: "data.json",
         dataType:"json",
         success: function(response){
            console.log(response);
         }
      });
   });  
});
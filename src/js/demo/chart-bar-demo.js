// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';




$.ajax({
  
  url: "api/productList.php",
  type: "GET",
  dataType: "json", // added data type
  beforeSend: function() {
  //    $("#spinner-doc-rec").show();
  },
  complete: function() {
      $("#spinner-doc-rec").hide();
  },
  success: function(res) {
    //  window.open(res, "_blank");
    var products =[],values =[];
    $.each(res, function(index) {
      products.push(this.ProductCode);
      values.push(this.Quantity);

    });
    loadChartHome(products,values, res)
  },
  error: function(xhr, ajaxOptions, thrownError) {
      //  alert(xhr.status);
      // alert(thrownError);
  }
});


function loadChartHome(label,data, res){
// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: label,
    datasets: [{
      label: "Stock",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: data,
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    onClick: function (e) {
      debugger;
      var activePointLabel = this.getElementsAtEvent(e)[0]._model.label;

       item = res.filter(item=>item.ProductCode.includes(activePointLabel));

       LoadProductDeailsPanel(item[0].ProductId,activePointLabel);

  },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: Math.max.apply(Math, data),
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value;
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false,
      'onClick' : function (evt, item) {
        console.log ('legend onClick', evt, item);
        
    }
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':' + tooltipItem.yLabel;
        }
      }
    },
  }
});
}
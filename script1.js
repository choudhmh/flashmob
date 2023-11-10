//var ctx = document.getElementById("myChart").getContext('2d');


function adddata() {
  let Syrdariya = document.getElementById("Syrdariya").value;
  let Alatau = document.getElementById("Alatau").value;
  let Zhumbaktas = document.getElementById("Zhumbaktas").value;
  let Ushkonyr = document.getElementById("Ushkonyr").value;
  let Akzhaiyk = document.getElementById("Akzhaiyk").value;
  let Koktobe = document.getElementById("Koktobe").value;
  let Samuryk = document.getElementById("Samuryk").value;
  let Okzhetpes = document.getElementById("Okzhetpes").value;
  let Baiterek = document.getElementById("Baiterek").value;
  let Ordabasy = document.getElementById("Ordabasy").value;
  let Altai = document.getElementById("Altai").value;
  let Nuralem = document.getElementById("Nuralem").value;
  let Otyrar = document.getElementById("Otyrar").value;

//  myChart.data.labels[1] = testName1;
  myChart.data.datasets[0].data[0] = Syrdariya;
  myChart.data.datasets[0].data[1] = Alatau;
  myChart.data.datasets[0].data[2] = Zhumbaktas;
  myChart.data.datasets[0].data[3] = Ushkonyr;
  myChart.data.datasets[0].data[4] = Akzhaiyk;
  myChart.data.datasets[0].data[5] = Koktobe;
  myChart.data.datasets[0].data[6] = Samuryk;
  myChart.data.datasets[0].data[7] = Okzhetpes;
  myChart.data.datasets[0].data[8] = Baiterek;
  myChart.data.datasets[0].data[9] = Ordabasy;
  myChart.data.datasets[0].data[10] = Altai;
  myChart.data.datasets[0].data[11] = Nuralem;
  myChart.data.datasets[0].data[12] = Otyrar;
 
  myChart.update();
}


var myData = {
    labels: ["Syrdariya", "Alatau", "Zhumbaktas", "Ushkonyr", "Akzhaiyk", "Koktobe", "Samuryk","Okzhetpes",
    "Baiterek", "Ordabasy", "Altai", "Nuralem", "Otyrar"],
    datasets: [{
        label: "Hey, baby!",
        fill: false,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgb(255, 0, 0)', 'rgba(41, 39, 245, 0.8)', 'rgba(243, 245, 39, 0.8)', 'rgba(245, 161, 39, 0.96)', 
        'rgba(17, 16, 16, 0.96)', 'rgba(224, 17, 210, 0.96)', 'rgba(17, 210, 224, 0.96)', 'rgba(143, 17, 224, 0.96)', 'rgba(17, 92, 79, 1)',
        'rgba(66, 87, 131, 1)', 'rgb(238, 130, 238)', 'rgb(106, 90, 205)'],
        borderColor: 'black',
        data: [Syrdariya, Alatau, Zhumbaktas, Ushkonyr, Akzhaiyk, Koktobe, Samuryk, Okzhetpes, Baiterek, Ordabasy, Altai, Nuralem, Otyrar],
    }]
};

// Options to display value on top of bars

var myoption = {
    scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 18,
        padding: 0,
        fontColor:'#000F'
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 18,
        padding: 0,
        fontColor:'#000F'
          }
        }]
      },
      
    tooltips: {
        enabled: true
    },
    hover: {
        animationDuration: 1
    },
    animation: {
    duration: 1,
    onComplete: function () {
        var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);

                });
            });
        }
    }
};


//Code to drow Chart

var ctx = document.getElementById('my_Chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',    	// Define chart type
    data: myData,    	// Chart data
    options: myoption 	// Chart Options [This is optional paramenter use to add some extra things in the chart].
});
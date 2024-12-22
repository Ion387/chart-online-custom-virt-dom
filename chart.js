let tooltipIndex = 0;

function createChart(position, data) {
  let dataArr = Object.values(data);
  dataArr = dataArr.filter((i) => typeof i === "number");

  const lastChart = document.getElementsByClassName("highcharts-figure")[0];
  if (lastChart) {
    lastChart.remove();
    
  }

  const chartPlaceEl = document.getElementById(position);
  const highchartsEl = document.createElement("figure");
  highchartsEl.classList.add("highcharts-figure");
  chartPlaceEl.appendChild(highchartsEl);
  const chartEl = document.createElement("div");
  chartEl.classList.add("chart");
  function setAttributes(el, atr) {
    for (var key in atr) {
      el.setAttribute(key, atr[key]);
    }
  }
  setAttributes(chartEl, { id: "chart", class: "chart" });
  highchartsEl.appendChild(chartEl);

  const chart = Highcharts.chart("chart", {
    chart: {
      type: "line",
      plotBorderColor: "Blue border",
    },
    title: {
      text: "Fruit Consumption",
      style: {
        display: "none",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        tooltipIndex = this.x;
        return data.name + ", " + this.category + ": " + this.y;
      },
    },
    xAxis: {
      categories: [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ],
      tickLength: 10,
      tickWidth: 1,
      tickmarkPlacement: "on",
      min: 0.5,
      startOnTick: false,
      endOnTick: false,
    },
    pointPlacement: "on",
    yAxis: {
      title: {
        text: data.name,
      },
      lineWidth: 1,
      tickLength: 10,
      tickWidth: 1,
    },

    series: [
      {
        name: data.name,
        data: dataArr,
      },
    ],
  });
  const el = document.getElementsByClassName("highcharts-credits");

  const el2 = document.getElementsByClassName("highcharts-exporting-group");
  setTimeout(() => {
    el2[0].remove();
    el[0].remove();
  }, 1);
}

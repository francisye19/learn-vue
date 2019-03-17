<template>
  <div id="chart" :height="soul.model.height" :width="soul.model.width"></div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

export default {
  name: "Gauge",
  data() {
    return {
      chart: null
      // title: 'gauge chart', // title of the chart
      // max: 0, // max value of gauge
      // min: 0, // min value of gauge
      // dataName: null, //
      // data: null, // chart data
      // unit: '' // unit of data
    };
  },
  props: {
    soul: [Object]
  },
  mounted() {
    let chartOptions = {
      chart: {
        type: "solidgauge"
      },
      credits: {
        enabled: false
      },
      pane: {
        center: ["50%", "55%"],
        size: "100%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc"
        }
      },
      title: {
        text: this.soul.model.title
      },
      yAxis: {
        stops: [
          [0.1, "#55BF3B"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#DF5353"] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16
        },
        min: this.soul.model.min,
        max: this.soul.model.max,
        title: {
          text: this.soul.model.title
        }
      },
      plotOptions: {
        gauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0
            // useHTML: true
          }
        }
      },
      series: [
        {
          name: this.soul.model.title,
          data: [this.soul.model.data],
          dataLabels: {
            format: "{y}" + this.soul.model.unit
          },
          tooltip: {
            valueSuffix: this.soul.model.unit
          }
        }
      ]
    };
    this.chart = Highcharts.chart("chart", chartOptions);
  },
  watch: {
    "soul.model.data": function() {
      this.chart.series[0].setData([this.soul.model.data]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

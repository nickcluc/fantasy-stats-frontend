//components/pie-chart.js
import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['chart'],
  renderChart() {
    return this.$().highcharts({
      title: {
        text: "Regular Season Scores"
      },
      plotOptions: {
      },
      series: [{
        type: 'line',
        name: this.get('name'),
        data: this.get('data')
      }],
      credits: {
        enabled: true
      },
      responsive: {
       rules: [{
           condition: {
               maxWidth: 500
           },
           chartOptions: {
               legend: {
                   align: 'center',
                   layout: 'horizontal'
               },
               yAxis: {
                   labels: {
                       align: 'left',
                       x: 0,
                       y: -5
                   },
                   title: {
                       text: null
                   }
               }
           }
       }]
      }
    });
  },

  didUpdateAttrs() {
    let chart = this.$().highcharts();
    let series = this.get('data');
    chart.series[0].setData(series);
  },

  didInsertElement() {
    this._super(...arguments);
    this.renderChart();
  },

  willDestroyElement() {
    this.$().highcharts().destroy();
  }
});

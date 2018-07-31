
import Ember from 'ember';
import Highcharts from 'ember-highcharts';
export default Ember.Component.extend({

  classNames: ['chart'],
  renderChart() {
    return this.$().highcharts({
      title: {
        text: this.get('year') + " Regular Season"
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function () {
              return Highcharts.dateFormat('%m/%d', this.value);
          }
        }
      },
      plotOptions: {
      },
      series: [{
        type: 'spline',
        name: this.get('name'),
        data: this.get('data').map(matchup => [Date.parse(matchup.matchup_date), matchup.score]),
        color: '#03dac6'
      },{
        type: 'spline',
        name: 'Opponents',
        data: this.get('data').map(matchup => [Date.parse(matchup.matchup_date), matchup.opponent_score]),
        lineWidth: 0.5,
        color: '#C51162'
      }],
      credits: {
        enabled: true
      },
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
  },
});


import Ember from 'ember';
export default Ember.Component.extend({

  classNames: ['chart'],
  renderChart() {
    return this.$().highcharts({
      title: {
        text: "Regular Season Scores"
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
        type: 'line',
        name: this.get('name'),
        data: this.get('data').map(matchup => [Date.parse(matchup.matchup_date), matchup.score])
      },{
        type: 'line',
        name: 'Opponents',
        data: this.get('data').map(matchup => [Date.parse(matchup.matchup_date), matchup.opponent_score]),
        lineWidth: 0.5,
        color: 'red'
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

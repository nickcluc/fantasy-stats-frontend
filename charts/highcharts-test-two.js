import Highcharts from 'ember-highcharts/components/high-charts';

export default Highcharts.extend({
  // chartMode: '', // empty, 'StockChart', or 'Map'
  chartOptions: {
    title: {
      text: owner.full_name + " total points"
    }
  },
  // chartData: [],
  // theme: {}
});

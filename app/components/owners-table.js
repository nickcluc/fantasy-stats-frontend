import Component from '@ember/component';
import TableCommon from '../mixins/table-common';
import { computed } from '@ember/object';

export default Component.extend(TableCommon, {
  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'first_name'
    }, {
      label: 'Last Name',
      valuePath: 'last_name'
    }, {
      label: 'Seasons',
      valuePath: 'career_length'
    },  {
      label: 'Total Career Points For',
      valuePath: 'total_points'
    }, {
      label: 'Total Career Points Against',
      valuePath: 'total_points_against'
    }, {
      label: 'Career Wins',
      valuePath: 'career_wins'
    }, {
      label: 'Career Losses',
      valuePath: 'career_losses'
    }, {
      label: 'Highest One Week Total',
      valuePath: 'max_score'
    }, {
      label: 'Lowest One Week Total',
      valuePath: 'min_score'
    }];
  })
});

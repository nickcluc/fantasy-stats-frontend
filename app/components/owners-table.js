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
      label: 'Total Career Points',
      valuePath: 'total_points'
    }, {
      label: 'Career Wins',
      valuePath: 'career_wins'
    }, {
      label: 'Career Losses',
      valuePath: 'career_losses'
    }];
  })
});

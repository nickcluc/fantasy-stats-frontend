import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service('store'),
  selectedBasicTab: 0,
  selectedStatYearTab: 0,
  owner: function() {
    return this.get('store').findRecord('owner', 1);
  },
  actions: {
    closeDialog(result, owner) {
      this.set('result', result);
      this.set('rowExpanded', false);
    },
  }
});

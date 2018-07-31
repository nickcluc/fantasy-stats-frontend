import Component from '@ember/component';

export default Component.extend({
  selectedBasicTab: 0,
  selectedStatYearTab: 0,
  actions: {
    closeDialog(result, owner) {
      this.set('result', result);
      this.set('rowExpanded', false);
    },
  }
});

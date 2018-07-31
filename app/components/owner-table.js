import Component from '@ember/component';

export default Component.extend({
  actions: {
    expand(owner) {
      this.toggleProperty('rowExpanded');
      this.set('owner', owner);
    },
    closeDialog(result, owner) {
      console.log('close owner-table');
      this.set('result', result);
      this.set('rowExpanded', false);
    },
  },
});

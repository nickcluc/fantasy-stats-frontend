export default Ember.Route.extend({
  model() {
     return Ember.$.getJSON("luck.json");
  }
});

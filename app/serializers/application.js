import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(key) {
    return key;
  },

  keyForRelationship: function(key, relationship, method) {
    return key;
  },

  keyForLink: function(key) {
    return key;
  }
});

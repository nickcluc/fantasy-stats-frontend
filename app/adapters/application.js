import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL,
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },
  coalesceFindRequests: true,
  findMany(store, type, ids, snapshots) {
    // ids === ['21', '22', '23']
    return this._super(...arguments);
  },
});

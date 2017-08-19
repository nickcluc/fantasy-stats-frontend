import DS from 'ember-data';
import { belongsTo, hasMany } from "ember-data/relationships";

export default DS.Model.extend({
  owner: DS.belongsTo(),
  name: DS.attr('string'),
  league_year: DS.attr(),
  points_for: DS.attr(),
  points_against: DS.attr(),
  wins: DS.attr(),
  losses: DS.attr()
})

// name: DS.attr('string'),
// league_year: DS.attr(),
// points_for: DS.attr(),
// points_against: DS.attr(),
// wins: DS.attr(),
// losses: DS.attr()

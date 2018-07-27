import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('owner'),
  name: DS.attr('string'),
  league_year: DS.attr(),
  points_for: DS.attr(),
  points_against: DS.attr(),
  wins: DS.attr(),
  losses: DS.attr()
})

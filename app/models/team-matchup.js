import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('owner'),
  season_id: DS.attr('number'),
  week_number: DS.attr('number'),
  score: DS.attr('number'),
  opponent_score: DS.attr('number'),
  matchup_date: DS.attr(),
})

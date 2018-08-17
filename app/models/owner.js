import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  full_name: DS.attr('string'),
  total_points: DS.attr('number'),
  total_points_against: DS.attr('number'),
  average_regular_season_score: DS.attr('number'),
  average_total_points: DS.attr('number'),
  team_matchups: DS.hasMany('team_matchup'),
  teams:  DS.hasMany('team'),
  career_length: DS.attr(),
  career_wins: DS.attr('number'),
  career_losses: DS.attr('number'),
  min_score: DS.attr('number'),
  max_score: DS.attr('number'),
  championships: DS.hasMany('championships', {async: true, polymorphic: true}),
  second_places: DS.hasMany('second_places', {async: true, polymorphic: true}),
  third_places: DS.hasMany('third_places', {async: true, polymorphic: true}),
  last_places: DS.hasMany('last_places', {async: true, polymorphic: true}),
  seasons: DS.hasMany('seasons', {async: true, polymorphic: true}),
  head_to_head_vs_all: DS.attr(),
})

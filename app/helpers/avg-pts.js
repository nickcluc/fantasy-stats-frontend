import Ember from 'ember';

export function avgPts(points_for){
  var avg = points_for[0] / (points_for[1]+points_for[2]);
  return avg.toFixed(2);
}

export default Ember.Helper.helper(avgPts);

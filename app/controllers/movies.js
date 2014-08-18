import Ember from 'ember';

var moviesController = Ember.ArrayController.extend({
    actions: {
    sortBy: function(property) {
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
      this.set('isNone', true);
    },
    sortByAZ: function(property) {
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
      this.set('isNone', false);
      this.set('isAsc', !this.get('sortAscending'));
    }
  }
});

export default moviesController;
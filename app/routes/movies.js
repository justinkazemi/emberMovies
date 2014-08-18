import Ember from 'ember';

var MoviesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('movie');
    }
});
 
export default MoviesRoute;
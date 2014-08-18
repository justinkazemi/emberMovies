import Ember from 'ember';

var DirectorsRoute = Ember.Route.extend({
    model: function(params){
    	//to return movies
		return Ember.$.getJSON('http://netflixroulette.net/api/api.php?director='+params.director+'');
	}
});
 
export default DirectorsRoute;
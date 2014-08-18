import Ember from 'ember';
//Author: Justin Kazemi
//Date: 8/12/2014
var Router = Ember.Router.extend({
  location: IndieENV.locationType
});

Router.map(function() {
	//nested routes
	this.resource('movies', {path: '/'}, function (){
		this.resource('directors', {path: '/directors/:director'});
	});
});

export default Router;

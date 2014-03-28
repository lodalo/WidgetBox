//- APP 1 ------------------------------------------------------
App = Ember.Application.create({
    rootElement: '#wnp-ember-widget'
});

App.Router = Ember.Router.extend({
  	location: 'none'
});

books = [{
	title: "The Ember way",
 	description: "There are many things to learn, but to learn the right thing is best."
  },
  {
  	title: "When you clicked",
  	description: "Once upon a time, a user clicked on a page div..."
}];

App.ApplicationRoute = Ember.Route.extend({
	model: function() {
    	return books; 
  	},
  	actions: {
  		bookOpen: function(title){
			console.log('EMBER library book opened: '+title);
		}
  	}
});

App.LibraryBookComponent = Ember.Component.extend({
    actions: {
        toggleDescription: function(){
			this.toggleProperty('showDescription');
            this.sendAction('action',this.get('title'));
        }
    }
});

//- APP 2 ------------------------------------------------------

Widget = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    LOG_ACTIVE_GENERATION: true,
    rootElement: '#wnp-ember-widget-two'
});

Widget.Router = Ember.Router.extend({
  	location: 'none'
});

Widget.Router.map(function(){
    this.route('anotheroo');
});

Widget.ApplicationRoute = Ember.Route.extend({
    renderTemplate: function() {
    	this.render('widget');
  	},
    model: function() {
        return [{
            title: "Learn Ember.js"
          },
          {
            title: "Walk the dog"
          }];
    },
    actions: {
        transitionToAnother: function(){
            this.transitionTo('anotheroo');
        }
    }
});

Widget.AnotherooRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('anotheroo');
    },
    model: function(){
       return {data: "anotheroo anotheroo!!!!!"}
    }
});
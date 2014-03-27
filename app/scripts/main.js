App = Ember.Application.create({
    rootElement: '#wnp-ember-widget'
});

App.Router = Ember.Router.extend({
  location: 'none'
});

books = [{
  title: "The Ember way",
  description: "There are many things to learn, but to learn the right thing is best."
}, {
  title: "When you clicked",
  description: "Once upon a time, a user clicked on a page div..."
}];

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return books; 
  }
});

App.LibraryBookComponent = Ember.Component.extend({
    actions: {
        toggleDescription: function(){
			this.toggleProperty('showDescription');
        }
    }
});
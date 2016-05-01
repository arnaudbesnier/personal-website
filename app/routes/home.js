import Ember from 'ember';

export default Ember.Route.extend({
  activate: () => {
    Ember.$('#nav-about').addClass('active');
  },
  renderTemplate() {
    this.render('about');
  }
});

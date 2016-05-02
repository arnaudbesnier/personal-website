import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('photos');
  this.route('news', /*() => {
    this.route('2016', () => {
      this.route('january');
    });
    this.route('2015', () => {
      this.route('december');
      this.route('october');
      this.route('september');
    });
  },*/ function() {
    this.route('2015', function() {
      this.route('september');
    });
  });
});

export default Router;

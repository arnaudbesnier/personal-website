import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('photos');
  this.route('news');
  this.route('news/2016/january');
  this.route('news/2015/december');
  this.route('news/2015/october');
  this.route('news/2015/september');
});

export default Router;

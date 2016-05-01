import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import _ from 'underscore';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  ready: () => {
    console.log('here!');
    const socialNetworks = ['facebook', 'twitter', 'instagram', 'soundcloud', 'dribbble', 'medium', 'github', 'linkedin'];
    const $ = Ember.$;
    _.each(socialNetworks, (network) => {
        $(`#${network}_link`).mouseover(() => {
          $(`#${network}_link`).attr('src', `images/social-networks/${network}-on.png`);
        });
        $(`#${network}_link`).mouseout(() => {
          $(`#${network}_link`).attr('src', `images/social-networks/${network}-off.png`);
        });
    });
    $('#photo-profile').mouseover(() => {
        $('#photo-profile').attr('src', 'images/face-on.jpg');
    });
    $('#photo-profile').mouseout(() => {
        $('#photo-profile').attr('src', 'images/face-off.jpg');
    });
  },
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

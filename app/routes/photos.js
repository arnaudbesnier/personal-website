import Ember from 'ember';

var collectionPhoto = [{
    src: 'photos/petra_piana.jpg',
    title: 'Petra Piana View',
    subtitle: 'Peaceful Mountains from the Shelter',
    aperture: 'f/5,6',
    shutterSpeed: '1/30',
    place: 'Petra Piana, Corsica, France',
    date: 'June 24, 2015'
  },{
    src: 'photos/bocca_innuminata.jpg',
    title: 'Bocca Innuminata',
    subtitle: '3 Men on the Rocks',
    aperture: 'f/10',
    shutterSpeed: '1/160',
    place: 'Bocca Innuminata, Corsica, France',
    date: 'June 21, 2015'
  },{
    src: 'photos/gili.jpg',
    title: 'Gili Island',
    subtitle: 'Tortules heaven',
    aperture: 'f/8',
    shutterSpeed: '1/125',
    place: 'Gili Trawangan, Indonesia',
    date: 'October 22, 2014'
  },{
    src: 'photos/gunungkawi.jpg',
    title: 'Gunung Kawi Temple',
    subtitle: 'Tomb of King Anak Wungsu of the Udayana dynasty',
    aperture: 'f/5.6',
    shutterSpeed: '1/200',
    place: 'Region of Ubud, Indonesia',
    date: 'October 18, 2014'
  },{
    src: 'photos/ducati.jpg',
    title: 'Custom Ducati Sport 1000',
    subtitle: 'Meet the motorbike I dream of',
    aperture: 'f/11',
    shutterSpeed: '1/25',
    place: 'New York City, NY',
    date: 'October 16, 2013'
  },{
    src: 'photos/flatiron.jpg',
    title: 'Flatiron Building',
    subtitle: 'Stronger than the wind',
    aperture: 'f/5.6',
    shutterSpeed: '1/200',
    place: 'New York, NY',
    date: 'September 30, 2013'
  },{
    src: 'photos/autumn_providence.jpg',
    title: 'Autumn in Providence',
    subtitle: 'Leaves on the bridge',
    aperture: 'f/4',
    shutterSpeed: '1/30',
    place: 'Providence, RI',
    date: 'October 5, 2013'
  }];

export default Ember.Route.extend({
  title: 'Photos • Arnaud Besnier',
  activate: () => {
    Ember.$('#nav-photos').addClass('active');
  },
  model() {
    return collectionPhoto;
  }
});

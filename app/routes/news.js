import Ember from 'ember';

var collectionPosts = [{
    date: '31 Janvier 2016',
    title: 'Toronto - January 2016',
    description: "En ce début d'année, nous nous sommes essayés au match de hockey (en tant que spectateurs bien sûr). C'est un passage obligatoire pour approfondir la culture canadienne. Nous avons vu s'affronter les \"Toronto Marlies\" et les \"Crunch de Syracuse\"",
    link: '2016/january'
  },{
    date: '25 Décembre 2015',
    title: 'Toronto - December 2015',
    description: "En cette période de fêtes, nous avons remarqué à quel point Noël était ancré dans la culture nord-américaine. Il y a vraiment un esprit de Noël. Les symboles sont présents partout dans la ville : les immenses sapins décorés",
    link: '2015/december'
  },{
    date: '7 Novembre 2015',
    title: 'Toronto - October 2015',
    description: "Je sais que la météo est un sujet de tous les instants ! Pour répondre aux interrogations de chacun, non Octobre n’a pas été trop froid, je suis même allé courir en manches courtes en ce début Novembre et",
    link: '2015/october'
  },{
    date: '2 Octobre 2015',
    title: 'Toronto - September 2015',
    description: "En arrivant ici, la température a été une bonne surprise. Il faisait vraiment meilleur qu'à Paris. Le fameux été indien ? On a entendu dire qu'ici il faisait froid du 1er Octobre au 1er Mai. On a sourit sur le coup mais",
    link: '2015/september'
  }];

export default Ember.Route.extend({
  title: 'News • Arnaud Besnier',
  model() {
    return collectionPosts;
  }
});

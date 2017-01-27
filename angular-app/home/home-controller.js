angular.module("birdApp").controller("homeController",homeController);

function homeController($route, $routeParams) {
  var hc = this;
  hc.blocHome = [
    {
      title : "Oisillons tombés du nid",
      imageUrl : "images/oisillons.png",
      list : [
        {
          title : 'Les premiers soins',
          redirection : '/oisillons/soins'
        },
        {
          title : 'Identifier un oisillon',
          redirection : '/oisillons/authentification'
        },
        {
          title : 'L\'alimentation par espèce',
          redirection : '/oisillons/alimentation'
        },
        {
          title : 'La réhabilitation',
          redirection : '/oisillons/rehabilitation'
        }
      ]
    },
    {
      title : "Oiseaux blessés",
      imageUrl : "images/oiseaux_blesses.png",
      list : [
        {
          title : 'Les centres de soins',
          redirection : 'oiseaux/centres'
        },
        {
          title : 'La pharmacie d\'urgence',
          redirection : 'oiseaux/pharmacie'
        },
        {
          title : 'Un oiseau en état de choc',
          redirection : 'oiseaux/choc'
        },
        {
          title : 'Une blessure ouverte',
          redirection : 'oiseaux/blessures'
        }
      ]
    },
    {
      title : "Aider les oiseaux à chaque saison",
      imageUrl : "images/oiseau_ciel.png",
      list : [
        {
          title : 'L\'hiver : une étape difficile',
          redirection : 'oiseaux/hiver'
        },
        {
          title : 'La saison des amours : quelques règles à respecter',
          redirection : '/oiseaux/printemps'
        }
      ]
    }
  ];

  console.log(hc.blocHome);
}

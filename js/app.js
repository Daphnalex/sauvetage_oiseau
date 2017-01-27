angular.module('birdApp', ['ngRoute']).config(config);

function config($httpProvider, $routeProvider){

  $routeProvider
    .when('/',{
      templateUrl : 'angular-app/home/home.html',
      controller : 'homeController',
      controllerAs : 'hc'
    })
    .when('/oisillons/soins',{
      templateUrl : 'angular-app/oisillons/soins/oisillon_soin.html'
    })
    .otherwise({
      redirectTo   :'/'
    });
};

'use strict';

/**
 * @ngdoc overview
 * @name fppaddleboardsApp
 * @description
 * # fppaddleboardsApp
 *
 * Main module of the application.
 */
angular
  .module('fppaddleboardsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/contact', {
		  templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
	  })
	  .when('/pictures', {
		  templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl',
        controllerAs: 'pictures'
	  })
	  .when('/locationsmap', {
		  templateUrl: 'views/locationsmap.html',
        controller: 'LocationsmapCtrl',
        controllerAs: 'locationsmap'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict'

	// create the module and name it stencilApp
	var stencilApp = angular.module('stencilApp', ['ui.router'])
	// configure our routes
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            // HOME STATES ========================================
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                ncyBreadcrumb: {
                    label: 'Home'
                  }
            })
            // HOME STATES ========================================
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services.html',
                ncyBreadcrumb: {
                    label: 'Services'
                  }

            })
            // HOME STATES ========================================
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                ncyBreadcrumb: {
                    label: 'About'
                  }

            })
            // HOME STATES ========================================
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html'
            })
            // ABOUT PAGE =================================
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            });
    });

	// create the controller and inject Angular's $scope
	stencilApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	stencilApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	stencilApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});



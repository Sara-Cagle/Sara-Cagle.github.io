angular.module('PortfolioApp', ['ngRoute', 'ngAnimate'])


	/*
	* Due to the CSS, these actually are loaded into the page from right to left (backwards), so put the most important links
	* at the bottom of this list, so they will appear closest to the left.
	*/
	.controller('navController', [function ($route, $routeParams) {
		this.links = [
			{
				linkName: 'Contact',
				URL: '#/contact'
			},
			// {linkName: 'Experience',
			// URL: '#/experience',
			// },
			// {linkName: 'Projects',
			// URL: '#/projects',
			// },
			{
				linkName: 'About',
				URL: '#/about',
			},
			{
				linkName: 'HCDE 533',
				URL: '#/hcde533'
			}
		]
	}])

	.controller('contentController', ['$scope', function ($scope, $route, $routeParams) {

		/*
		* For toggling the WeChat QR code modal.
		*/
		$scope.showModal = false;
		$scope.openModal = function () {
			$scope.showModal = !$scope.showModal;
		};


	}])

	.controller('hcdeProjectController', ['$scope', function ($scope, $route, $routeParams) {
		/* HCDE 533 projects */
		this.projects = [
			{
				id: 'a1',
				title: 'A1 - Modeling & Laser Cutting - Cardboard Centipede',
				description: 'Two pieces designed to be interlocked and repeatable to create a cardboard model of a centipede. Pieces were modeled in Rhino 7 and then laser cut on an Epilog Laser.',
				URL: '#/projecta1'
			},
			{
				id: 'a2',
				title: 'A2 - 3D Printing',
				description: 'TBD',
				URL: '#/projects/a2'
			},
			{
				id: 'a3',
				title: 'A3 - Parametric Modeling with Grasshopper',
				description: 'TBD',
				URL: '#/projects/a3'
			},
			{
				id: 'a4',
				title: 'A4 - Mesh & Lamps Part 1',
				description: 'TBD',
				URL: '#/projects/a4'
			},
			{
				id: 'a5',
				title: 'A5 - Molding & Casting Part 1, Lamps Part 2',
				description: 'TBD',
				URL: '#/projects/a5'
			},
			{
				id: 'a6',
				title: 'A6 - Molding & Casting Part 2',
				description: 'TBD',
				URL: '#/projects/a6'
			},
			{
				id: 'a7',
				title: 'A7 - Final Project Proposal',
				description: 'TBD',
				URL: '#/projects/a7'
			},
			{
				id: 'a8',
				title: 'A8 - Final Project',
				description: 'TBD',
				URL: '#/projects/a8'
			},
		]


	}])

	.config(function ($routeProvider) { //routing needs to be on a server in order to run
		$routeProvider
			.when('/', {
				templateUrl: 'views/hcde533.html',
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'contentController',
			})
			.when('/experience', {
				templateUrl: 'views/experience.html',
				controller: 'contentController'
			})
			.when('/projects', {
				templateUrl: 'views/project.html',
				controller: 'contentController'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'contentController',
			})
			/* For HCDE 533 routes, not dynamic since not standardized from a DB */
			.when('/hcde533', {
				templateUrl: 'views/hcde533.html',
				controller: 'contentController',
			})
			.when('/projecta1', {
				template: '../views/hcde533/a1.html',
				controller: 'contentController'
			})
			.when('/hcde533/a2', {
				template: 'views/hcde533/a2.html',
				controller: 'contentController'
			})
			.when('/hcde533/a3', {
				template: 'views/hcde533/a3.html',
				controller: 'contentController'
			})
			.when('/hcde533/a4', {
				template: 'views/hcde533/a4.html',
				controller: 'contentController'
			})
			.when('/hcde533/a5', {
				template: 'views/hcde533/a5.html',
				controller: 'contentController'
			})
			.when('/hcde533/a6', {
				template: 'views/hcde533/a6.html',
				controller: 'contentController'
			})
			.when('/hcde533/a7', {
				template: 'views/hcde533/a7.html',
				controller: 'contentController'
			})
			.when('/hcde533/a8', {
				template: 'views/hcde533/a8.html',
				controller: 'contentController'
			});
	})

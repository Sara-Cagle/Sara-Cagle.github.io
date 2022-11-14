// eslint-disable-next-line no-undef
angular.module('PortfolioApp', ['ngRoute', 'ngAnimate'])

    /*
                    * Due to the CSS, these actually are loaded into the page from right to left (backwards), so put the most important links
                    * at the bottom of this list, so they will appear closest to the left.
                    */
    .controller('navController', [function ($route, $routeParams) {
        this.links = [
            {
                linkName: 'Contact',
                URL: '#/contact',
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
                URL: '#/hcde533',
            },
        ];
    }])

    .controller('contentController', ['$scope', function ($scope, $route, $routeParams) {
        /*
            * For toggling the WeChat QR code modal.
            */
        $scope.showModal = false;
        $scope.openModal = () => {
            $scope.showModal = !$scope.showModal;
        };
    }])

    .controller('hcdeProjectController', ['$scope', function ($scope) {
        /* HCDE 533 projects */
        this.projects = [
            {
                id: 'a1',
                title: 'A1 - Modeling & Laser Cutting - Cardboard Centipede',
                description: 'Two pieces designed to be interlocked and repeatable to create a cardboard model of a centipede. Pieces were modeled in Rhino 7 and then laser cut on an Epilog Laser.',
                URL: '#/hcde533/a1',
            },
            {
                id: 'a2',
                title: 'A2 - Parametric Modeling with Grasshopper - a Lesson in Safety',
                description: 'Using Grasshopper to programmatically creating multiple pieces that can be interlocked and repeatable when laser cut out of cardboard. Pieces were modeled in Rhino 7 with Grasshopper and then laser cut on an Epilog Laser',
                URL: '#/hcde533/a2',
            },
            {
                id: 'a3',
                title: 'A3 -Intro to 3D Printing',
                description: 'Building the Ender 3 Pro 3D printer, running and designing comparable test prints, and designing a simple one-piece wheel and axel.',
                URL: '#/hcde533/a3',
            },
            {
                id: 'a4',
                title: 'A4 - Subtractive Manufacturing with the Bantam CNC Mill',
                description: 'Designing and milling the pieces of a cube using Rhino, Grasshopper, KiCAD, and a Bantam CNC Mill',
                URL: '#/hcde533/a4',
            },
            {
                id: 'a5',
                title: 'A5 - Getting Meshy - Mewtwo',
                description: 'Using pre-existing STL files from Thingiverse to practice manipulating meshes on Rhino.',
                URL: '#/hcde533/a5',
            },
            {
                id: 'a6',
                title: 'A6 - Lamp Design - "Fish Scale" 3D Printed and Laser Cut Lamp',
                description: 'Creating a lamp inspired by fish scales, including designing the scales, connection mechanism, and an inner shade in Rhino, and manufacturing the pieces with a 3D printer and laser cutter.',
                URL: '#/hcde533/a6',
            },
            {
                id: 'a7',
                title: 'A7 - Final Project Proposal',
                description: 'TBD',
                URL: '#/hcde533/a7',
            },
            {
                id: 'a8',
                title: 'A8 - Final Project',
                description: 'TBD',
                URL: '#/hcde533/a8',
            },
        ];

        // this.getCurrProjectId = () => {
        //     console.log(`Curr project Id: ${$location.path().substr(9)}`);
        //     return $location.path().substr(9);
        // };

        // this.getPrevProjectUrl = () => {
        //     const currProjectIndex = this.projects.findIndex((x) => x.id === this.getCurrProjectId());
        //     const prevIndex = currProjectIndex - 1;
        //     if (prevIndex >= 0) {
        //         return this.projects[prevIndex].URL;
        //     }
        //     return undefined;
        // };

        // this.getPostProjectUrl = () => {
        //     const currProjectIndex = this.projects.findIndex((x) => x.id === this.getCurrProjectId());
        //     const postIndex = currProjectIndex + 1;
        //     if (postIndex < this.projects.length) {
        //         return this.projects[postIndex].URL;
        //     }
        //     return undefined;
        // };
    }])

    .config(($routeProvider) => { // routing needs to be on a server in order to run
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
                controller: 'contentController',
            })
            .when('/projects', {
                templateUrl: 'views/project.html',
                controller: 'contentController',
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
            .when('/hcde533/a1', {
                templateUrl: 'views/hcde533/a1.html',
                controller: 'contentController',
            })
            .when('/hcde533/a2', {
                templateUrl: 'views/hcde533/a2.html',
                controller: 'contentController',
            })
            .when('/hcde533/a3', {
                templateUrl: 'views/hcde533/a3.html',
                controller: 'contentController',
            })
            .when('/hcde533/a4', {
                templateUrl: 'views/hcde533/a4.html',
                controller: 'contentController',
            })
            .when('/hcde533/a5', {
                templateUrl: 'views/hcde533/a5.html',
                controller: 'contentController',
            })
            .when('/hcde533/a6', {
                templateUrl: 'views/hcde533/a6.html',
                controller: 'contentController',
            })
            .when('/hcde533/a7', {
                templateUrl: 'views/hcde533/a7.html',
                controller: 'contentController',
            })
            .when('/hcde533/a8', {
                templateUrl: 'views/hcde533/a8.html',
                controller: 'contentController',
            });
    });

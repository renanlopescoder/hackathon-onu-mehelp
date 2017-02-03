var mehelpApp = angular.module('mehelpApp',['ngRoute','services','directives']);

mehelpApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when('/listAula', {
      templateUrl : 'views/aulas.html',
      controller : 'AulaController'
   }).when('/listToday', {
       templateUrl : 'views/task/task-today-list.html',
       controller : 'TaskController'
    }).when('/', {
       templateUrl : 'views/login.html',
       controller : 'UserController'
    }).when('/list-done', {
       templateUrl : 'views/task/task-completed-list.html',
       controller : 'TaskController'
    }).when('/create', {
       templateUrl : 'views/create.html',
       controller : 'TaskController'
    }).when('/about', {
       templateUrl : 'views/about.html',
       controller : 'TaskController'
    }).when('/calendar', {
       templateUrl : 'views/calendar.html',
       controller : 'TaskController'
    })
   .otherwise ({ redirectTo: '/' });
}]);

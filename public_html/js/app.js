var chatApp = angular.module('chatApp', ['ngResource','ngRoute']);

var address = 'http://jsonplaceholder.typicode.com'


chatApp.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'chatCtrl',
          title: 'Welcome'
        })
      .when('/users/:id', {
          templateUrl: 'views/userDetails.html',
          controller: 'usersCtrl',
          title: 'User details'
       })
});

chatApp.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
}]);

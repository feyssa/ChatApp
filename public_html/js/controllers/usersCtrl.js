chatApp.controller('usersCtrl', ['$scope', 'userSvc','$location', '$routeParams',
    function ($scope, userSvc, $location, $routeParams) {
      userSvc.getUser($routeParams.id)
          .success(function (data) {
              $scope.u = data;
          });
}]);

chatApp.factory('usersSvc', function ($resource) {
    return $resource(address + '/users/:user',{user: "@user"});
});

chatApp.service('userSvc', ['$http', function ($http) {
  this.getUser = function (id) {
      return $http.get(address + '/users/' + id)
      .success(function (data) {
          return data;
      });
  };
  return this;

}]);

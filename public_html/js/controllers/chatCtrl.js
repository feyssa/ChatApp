chatApp.controller('chatCtrl', ['$scope', '$resource', 'usersSvc', 'postsSvc',
                  function($scope, $resource, usersSvc, postsSvc) {

    $scope.users = usersSvc.query();
    $scope.posts = postsSvc.query();


  $scope.msgs = [

    { nickName: 'Echo', Msg :'Welcome to chat - write something!' }

  ];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

	$scope.nickName = $scope.nickName || '';
	$scope.Msg = '';

	$scope.submit = function() {

          var newMsg = {};
          newMsg.nickName = 'Me';
          newMsg.Msg = $scope.Msg;

          var randomUsers = getRandom(0, 10);
          var randomPosts = getRandom(0, 100);

          var fakeUserMsg = {};
          fakeUserMsg.nickName = $scope.users[randomUsers].username;
          fakeUserMsg.Msg = $scope.posts[randomPosts].body;

      	  $scope.msgs.push(newMsg);
          $scope.msgs.push(fakeUserMsg);

      	  $scope.nickName = "";
      	  $scope.Msg = "";

	};

  }]);

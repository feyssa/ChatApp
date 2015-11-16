chatApp.directive('message', function() {
                return {
                    restrict: 'E', 
                    scope: { m: '=messageData' },
                    templateUrl: 'views/msgTemplate.html'
            };
});

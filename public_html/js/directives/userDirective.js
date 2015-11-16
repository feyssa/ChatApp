chatApp.directive('user', function() {
                return {
                    restrict: 'E', 
                    scope: { user: '=userData' },
                    templateUrl: 'views/userTemplate.html'
            };
});

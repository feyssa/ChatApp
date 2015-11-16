chatApp.factory('postsSvc', function ($resource) {
    return $resource(address + '/posts/:post',{post: "@post"});
});

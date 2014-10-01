var phonecatApp = angular.module('posts_controller',[]).controller('posts_controller', ['$scope', '$http', function($scope, $http){
	  $scope.query = "";
      $scope.posts = [];
      $http.get('/posts.json').success(function(data) {
      	$scope.posts = data.posts;
      });
	}]
);
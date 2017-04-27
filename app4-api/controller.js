angular.module('apiApp')
.controller('mainCtrl',function($scope,apiService){
  $scope.getSmurfs=function(){
    apiService.getData()
    .then(function(response){
      $scope.smurfs =response;
      response.data;

    });
  };
$scope.getSmurfs();
});

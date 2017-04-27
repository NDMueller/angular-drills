angular.module('app')
.controller('mainCtrl',function($scope,mainService){

$scope.data=mainService.getData();

});

/**
 * Created by 亲爱的小强 on 2017/8/10.
 */
angular.module('app').
controller('DetailController',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.item =  $scope.listData[$stateParams.id];
    console.log($scope.item);
    $scope.content =  $scope.item.content;
    // console.log($scope.content);
}]);
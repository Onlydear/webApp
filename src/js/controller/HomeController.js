/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
angular.module('app').
controller('HomeController',['$scope','zkHttp','$state',function ($scope,zkHttp,$state) {
    //设置默认跳转子路由
    $state.go('app.index');

    zkHttp.getData(function (res) {
        console.log(res);
        $scope.listData = res;
    },function (error) {
        console.log(error);
    });

}]);
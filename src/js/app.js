/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
(function (angular) {
    //1.创建模块
    var app = angular.module('app',['ui.router']);
    //2.创建控制器
    app.controller('AppController',['$scope','$window',function ($scope,$window) {
        $scope.appTitle = 'webApp';
        //监听 tabbar 的切换
        var title = '首页';
        //记录当前选中哪个
        $scope.type = 'home';
        $scope.$on('tabChange',function (e, args) {
            $scope.type = args.type
            switch ($scope.type){
                case 'home':
                    title = "首页";
                    break;
                case 'author':
                    title = "作者";
                    break;
                case 'content':
                    title = "栏目";
                    break;
                case 'my':
                    title = "我的";
                    break;
            }

            //发送一个广播给导航,让它改标题
            $scope.$broadcast('titleChange',{title:title});
        });

        $scope.back = function () {
            $window.history.back();
        };

    }]);
})(angular)
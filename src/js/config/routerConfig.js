/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {

    $stateProvider.state('app',{
        url:'/app',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'HomeController'
            },
            author:{
                templateUrl:'../views/author_tpl.html',
                controller:'authorController'
            },
            content:{
                template:'<h1>栏目</h1>',
                controller:'authorController'
            },
            my:{
                template:'<h1>我的</h1>',
                controller:'authorController'
            }
        }
    });
    $urlRouterProvider.otherwise('app/index');
}])

    .config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state('app.index',{
            url:'/index',
            template:'<list></list>'
        });

    }]);
angular.module('app').config(['$stateProvider',function ($stateProvider) {
    //配置主路由
    $stateProvider.state('app.detail',{
        url:'/detail/:id',
        controller:'DetailController',
        template:'<detail content="{{content}}"></detail>'
    });

}]);
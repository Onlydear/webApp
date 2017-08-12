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
/**
 * Created by 亲爱的小强 on 2017/8/10.
 */
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/api/**'
    ]);
}]);
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
/**
 * Created by 亲爱的小强 on 2017/8/10.
 */
angular.module('app').controller('authorController',['$scope',function ($scope) {

}]);
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
/**
 * Created by 亲爱的小强 on 2017/8/11.
 */
angular.module('app').directive('detail',function () {
    return{
        restrict:'EA',
        template:'<div class="list_detail"></div>',
        link:function ($scope, ele, attr) {
            ele.html(attr.content);
        }
    }
})
/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
angular.module('app').directive('list',function () {
    return({
        restrict:'EA',
        templateUrl:'../views/list_tpl.html'
    })
})
/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
angular.module('app').directive('navs',function () {
   return{
       restrict:'EA',
       templateUrl:'../views/nav_tpl.html',
       link:function ($scope, ele, attr) {
           //监听标题改变的通知
           $scope.$on('titleChange',function (e, args) {
               var title = args.title;
                ele.find('span').html(title);
           })

           console.log(attr);
           if (attr.isBack != 'true'){
               ele.find('em').css({
                   'display':'none'
               })
           }
       }
   }
});
/**
 * Created by 亲爱的小强 on 2017/8/9.
 */
angular.module('app').directive('tabbar',function () {
    return({
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        link:function ($scope, ele, attr) {
            $scope.tabChange = function (type) {
                //当前点击了哪一个
                $scope.$emit('tabChange',{type:type});
            }
        }
    })
})
/**
 * Created by 亲爱的小强 on 2017/8/10.
 */

    angular.module('app').service('zkHttp',['$http',function ($http) {

        this.getData = function (success,error) {
            /*请求数据*/
            $http({
                url:"http://localhost/api/home.php",
                method:'jsonp'//必须得要使用jsonp
            }).then(function (res) {
                success(res.data.posts);
            }).catch(function (err) {
                error(err);
            });
        };

    }]);

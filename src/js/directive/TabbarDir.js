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
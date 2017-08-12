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
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
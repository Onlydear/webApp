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

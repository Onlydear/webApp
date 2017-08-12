/**
 * Created by 亲爱的小强 on 2017/8/10.
 */
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/api/**'
    ]);
}]);
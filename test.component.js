'use strict';
require('../../components/test/test.component.html')
angular.module('testC', []).directive('testComponent', function () {

    return {


        restrict: 'EA',
        templateUrl: '/app/components/test/test.component.html',
        controller: testComponentController,
        controllerAs: 'vm',
        scope: {
            object: "=",
            title:'@',
            subtitle:'@',
        }
    }
})
function testComponentController($scope, Restangular, notificationService, utilsService) {

    var vm = this;
     vm.Test = {};
    vm.Test.title = $scope.title
    vm.Test.subtitle = $scope.subtitle

} 
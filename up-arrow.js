/*
* up-arrow v0.0.1
* 2017 Manuel Mediavilla http://websrodriguez.com
* License: MIT
 */

'use strict';

angular.module('mmr.up-arrow', [])
    .directive('mmrUpArrow', function ($window) {

        var vm,
            showUpArrow;


        var linkFunc = function (scope, elem, attrs, vm) {
            angular.element($window).bind('scroll', function () {
                if(this.pageYOffset >= 200) {
                    vm.setShowArrowPosition(true);
                } else {
                    vm.setShowArrowPosition(false);
                }
                scope.$apply();
            });
        };

        var UpArrowController = function () {
            vm = this;
            showUpArrow = undefined;

            var setShowArrowPosition = function (showArrow){
                showUpArrow = showArrow;
            };

            var getShowArrowPosition = function() {
                return showUpArrow;
            };

            var goTop = function() {
                var timerID = setInterval(function() {
                    if( window.pageYOffset > 0 ){
                        $window.scrollBy(0, -10);
                    } else {
                        clearInterval(timerID);
                    }
                }, 1);
            };

            vm.setShowArrowPosition = setShowArrowPosition;
            vm.getShowArrowPosition = getShowArrowPosition;
            vm.goTop = goTop;
        };


        return {
            restrict: 'E',
            link: linkFunc,
            templateUrl: 'upArrow.html',
            controller: UpArrowController,
            controllerAs: 'vm',
            bindToController: true,
            scope: '='
        }
    });
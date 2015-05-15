/**
 * keyboardController
 */

(function() {
    'use strict';

    app.controller('KeyboardController', KeyboardController);

    KeyboardController.$inject = ['$scope'];

    function KeyboardController($scope) {
        $scope.typed = "";
        $scope.state = {
            capsLock: false,
            shift: false
        };

        $scope.handleType = handleType;
        $scope.capsLock = capsLock;
        $scope.shiftKey = shiftKey;
        $scope.deleteKey = deleteKey;

        function handleType($event) {
            if($event.target.attributes['data-value']) {
                $scope.typed += $event.target.attributes['data-value'].value;
            }
        }

        function capsLock($event) {
            $scope.state.shift = false;

            if ($scope.state.capsLock) {
                $scope.state.capsLock = false;
            } else {
                $scope.state.capsLock = true;
            }

            $event.stopPropagation();
        }

        function shiftKey($event) {
            $scope.state.capsLock = false;

            if ($scope.state.shift) {
                $scope.state.shift = false;
            } else {
                $scope.state.shift = true;
            }

            $event.stopPropagation();
        }

        function deleteKey($event) {
            $scope.typed  = $scope.typed.substring(0, $scope.typed.length - 1);
            $event.stopPropagation();
        }
    }

})();
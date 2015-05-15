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

        function handleType($event) {
            if($event.target.attributes['data-value']) {
                var keyValue = $event.target.attributes['data-value'];

                if(keyValue === 'capsLock' || keyValue === 'shiftKey') {
                    handleModifier(keyValue);
                } else if (keyValue === 'deleteKey') {
                    handleDelete();
                } else {
                    $scope.typed += $keyValue;
                }

            }
        }

        function handleModifier(modifier) {
            var modifierKeys = [
                    'capsLock',
                    'shiftKey'
                ],
                currentModifier,
                altModifier;

            for(i = 0; i < modifierKeys.length; i++) {
                if (modifierKeys[i] === modifier) {
                    currentModifier = modifierKeys[i];
                } else {
                    altModifier = modifierKeys[i];
                }
            }

            $scope.state[altModifier] = false;
            $scope.state[currentModifier] = $scope.state[currentModifier] === true ? false : true;
        }

        function handleDelete() {
            $scope.typed  = $scope.typed.slice(0, - 1);
        }
    }

})();

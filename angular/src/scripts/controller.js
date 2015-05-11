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
			$scope.typed += $event.target.attributes['data-value'].value;
		}

		function capsLock() {
			$scope.state.shift = false;
			
			if ($scope.state.capsLock) {
				$scope.state.capsLock = false;
			} else {
				$scope.state.capsLock = true;
			}
		}

		function shiftKey() {
			$scope.state.capsLock = false;

			if ($scope.state.shift) {
				$scope.state.shift = false;
			} else {
				$scope.state.shift = true;
			}
		}

		function deleteKey() {
			$scope.typed  = $scope.typed.substring(0, $scope.typed.length - 1);
		}
	}

})();
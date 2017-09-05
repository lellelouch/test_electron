const remote = require('electron').remote;

var app = angular.module('app-app', ['ngMaterial', 'ngAnimate', 'ngAria']);

app.controller("toolbar-toolbar", ["$scope", function($scope) {
	$scope.determine_unmaximize_maximize_class_icon;
	
	$scope.close_window = function() {
		var window = remote.getCurrentWindow();
		window.close();
	};
	
	$scope.minimize_window = function() {
		var window = remote.getCurrentWindow();
		window.minimize(); 
	};
	
	$scope.unmaximize_maximize = function() {
		var window = remote.getCurrentWindow();
		if (!window.isMaximized()) {
			//console.log("unmaximized");
			window.maximize();     
			
			$scope.determine_unmaximize_maximize_class_icon = "window-restore";
		} else {
			//console.log("maximized");
			window.unmaximize();
			$scope.determine_unmaximize_maximize_class_icon = "window-maximize"; 
		}
	};
	
	$scope.determine_unmaximize_maximize = function() {
		var window = remote.getCurrentWindow();
		if (!window.isMaximized()) {
			//console.log("unmaximized");  
			$scope.determine_unmaximize_maximize_class_icon = "window-maximize"; 		
		} else {
			//console.log("maximized");
			$scope.determine_unmaximize_maximize_class_icon = "window-restore"; 
		}
	};
	
	$scope.determine_unmaximize_maximize();
}]);

app.controller('login-login', function( $scope ) {
    $scope.user = { 
		name : "",
		password: ""
    }   
});
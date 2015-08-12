app.controller('homeCtrl', function($scope, productData) {
	$scope.products = productData.getProducts();
});




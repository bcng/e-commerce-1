app.controller('editCtrl', function($scope, productData, $routeParams) {

    var getSelectedProduct = function() {
        productData.getProductData().then(function(response) {
            for (var i = 0; i < response.length; i++) {
                if ($routeParams.id === response[i]._id) {
                    $scope.product = response[i];
                    console.log($scope.product);
                }
            }
        })
    }

    getSelectedProduct();

    $scope.updateProduct = function(product) {
        productData.updateProductData(product).then(function(response) {
            getSelectedProduct();
        })
    }

});

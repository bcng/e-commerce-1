app.controller('adminCtrl', function($scope, productData) {
    var getProducts = function() {
        productData.getProductData().then(function(response) {
            $scope.products = response;
        })
    }

    getProducts();

    $scope.addNewProduct = function() {
        productData.addProductData($scope.product).then(function(response) {
            getProducts();
        })
    }

    $scope.deleteProduct = function(product) {
        console.log(product);
        productData.deleteProductData(product).then(function(response) {
            getProducts();
        })
    }

    $scope.updateProduct = function(product) {
        productData.deleteProductData(product).then(function(response) {
            getProducts();
        })
    }
});

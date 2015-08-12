app.controller('adminCtrl', function($scope, productData) {
    $scope.addNewProduct = function() {
        productData.addProduct($scope.item).then(function(response) {
            $scope.products = response;
        })
    }

});

app.service('productData', function($http, $q) {

    var products = [{
        image: "images/double-knot-cuff-links.jpg",
        item_title: "DOUBLE KNOT CUFF LINKS",
        short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
        price: 475
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "PALOMA PICASSO KNOT SINGLE BRAID BRACELET",
        short_desc: "Of sterling silver and green leather. Extra large, fits wrists up to 7.25in in circumference. Original designs copyrighted by Paloma Picasso.",
        price: 350
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "DOUBLE KNOT CUFF LINKS",
        short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
        price: 475
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "PALOMA PICASSO KNOT SINGLE BRAID BRACELET",
        short_desc: "Of sterling silver and green leather. Extra large, fits wrists up to 7.25in in circumference. Original designs copyrighted by Paloma Picasso.",
        price: 350
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "DOUBLE KNOT CUFF LINKS",
        short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
        price: 475
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "PALOMA PICASSO KNOT SINGLE BRAID BRACELET",
        short_desc: "Of sterling silver and green leather. Extra large, fits wrists up to 7.25in in circumference. Original designs copyrighted by Paloma Picasso.",
        price: 350
    }, {
        image: "images/double-knot-cuff-links.jpg",
        item_title: "DOUBLE KNOT CUFF LINKS",
        short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
        price: 475
    }

    ];


    this.getProducts = function() {
        return products;
    };

    // this.getName = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8234/api/name'
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     }, function(error) {
    //         console.log("error: " + error)
    //     });
    //     return deferred.promise;
    // };

    // this.getLocation = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8234/api/location'
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     }, function(error) {
    //         console.log("error: " + error)
    //     });
    //     return deferred.promise;
    // };

    // this.getHobbies = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8234/api/hobbies'
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     }, function(error) {
    //         console.log("error: " + error)
    //     });
    //     return deferred.promise;
    // };

    // this.getOccupations = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8234/api/occupations'
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     }, function(error) {
    //         console.log("error: " + error)
    //     });
    //     return deferred.promise;
    // };

    // this.getSkills = function() {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8234/api/skills' 
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     }, function(error) {
    //         console.log("error: " + error)
    //     });
    //     return deferred.promise;
    // };

    // this.addHobby = function(hobby) {
    //     var deferred = $q.defer();          
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:8234/api/hobbies',
    //         data: {
    //             hobbies: hobby
    //         }
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     });
    //     return deferred.promise;
    // }

    // this.addOccupation = function(occupation) {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:8234/api/occupations',
    //         data: {
    //             occupations: occupation
    //         }
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     });
    //     return deferred.promise;
    // }

    // this.addSkill = function(skill, exp) {
    //     var deferred = $q.defer();
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:8234/api/skills',
    //         data: {
    //             name: skill,
    //             experience: exp
    //         }
    //     }).then(function(response) {
    //         deferred.resolve(response.data);
    //     });
    //     return deferred.promise;
    // }


});

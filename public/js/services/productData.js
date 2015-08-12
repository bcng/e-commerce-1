app.service('productData', function($http, $q) {

    var products = [{
            image: "images/double-knot-cuff-links.jpg",
            item_title: "DOUBLE KNOT CUFF LINKS",
            short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
            price: 475
        }, {
            image: "images/roadster-cuff-links.jpg",
            item_title: "ROADSTER CUFF LINKS",
            short_desc: "Cuff links in sterling silver.",
            price: 600
        },

        {
            image: "images/atlasoval-engine-turned-cuff-links.jpg",
            item_title: "ATLAS® OVAL ENGINE-TURNED CUFF LINKS",
            short_desc: "In 18k gold. 19 mm wide. ",
            price: 3000
        },

        {
            image: "images/atlaspendant.jpg",
            item_title: "ATLAS® PENDANT",
            short_desc: "Strong lines meet striking numerals in a contemporary design that honors a Tiffany icon. Pendant in titanium and sterling silver. On a 20in chain. ",
            price: 375
        },
        {
            image: "images/double-knot-cuff-links.jpg",
            item_title: "DOUBLE KNOT CUFF LINKS",
            short_desc: "Sophisticated. Modern. Urbane. Cuff links in sterling silver.",
            price: 475
        }, {
            image: "images/roadster-cuff-links.jpg",
            item_title: "ROADSTER CUFF LINKS",
            short_desc: "Cuff links in sterling silver.",
            price: 600
        },

        {
            image: "images/atlasoval-engine-turned-cuff-links.jpg",
            item_title: "ATLAS® OVAL ENGINE-TURNED CUFF LINKS",
            short_desc: "In 18k gold. 19 mm wide. ",
            price: 3000
        },

        {
            image: "images/atlaspendant.jpg",
            item_title: "ATLAS® PENDANT",
            short_desc: "Strong lines meet striking numerals in a contemporary design that honors a Tiffany icon. Pendant in titanium and sterling silver. On a 20in chain. ",
            price: 375
        }


    ];

    this.getProducts = function() {
        return products;
    };

    this.addProduct = function(item) {
        console.log(item);
        var deferred = $q.defer();          
        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/products',
            data: {
                image: item.image,
                item_title: item.title,
                short_desc: item.desc,
                price: item.price
            }
        }).then(function(response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }

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

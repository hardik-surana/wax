(function () {
    angular
        .module("genXapp")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller : "HomeController as HomeModel"
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/website.view.html",
                controller : "WebsiteController as WebsiteModel"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.html",
                controller: "NewWebsiteController as WebsiteModel"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.html",
                controller: "EditWebsiteController as WebsiteModel"
            })
            .when("/page", {
                templateUrl: "views/page/page.view.html",
                controller: "PageController as PageModel"
            })

            .when("/user", {
                templateUrl: "views/user/user.view.html",
                controller : "UserController as UserModel"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();
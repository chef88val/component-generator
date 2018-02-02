

/*** Sistema de Rutas para Usuarios ***/


adminApp.config(function($routeProvider){


  $routeProvider.when("/users", {
    templateUrl: "views/users/index.html",
    controller: "users.index",
    controllerAs: "vm",
    label: "Users"
  }).when("/users/new", {
    templateUrl: "views/users/form.html",
    controller: "users.new",
    controllerAs: "vm",
    resolve: {
      title: function () {
        return "New user";
      },
      user: function () {
        return null;
      },
      ban_types: function () {
        return null;
      },
      chats: function () {
        return null;
      },
      user_bans: function () {
        return null;
      }
    },
    label: "New User"
  })
    .when("/users/:id", {
      templateUrl: "views/users/form.html",
      controller: "users.update",
      resolve: {
        user: function (Restangular, $route) {

          return Restangular.one("api/administration/user", $route.current.params.id).get();
        },
        title: function () {
          return "Update";
        }
      },
      label: "Edit User"
    })
    .when("/users/detail/:id", {
      templateUrl: "views/users/form.html",
      controller: "users.new",
      controllerAs: "vm",
      resolve: {
        user: function (Restangular, $route) {

          return Restangular.one("api/administration/user", $route.current.params.id).get();
        },
        ban_types: function (Restangular) {

          return Restangular.all("api/administration/ban_type").getList();
        },
        chats: function (Restangular) {

          return Restangular.all("api/administration/room").getList();
        },
        user_bans: function (Restangular, $route) {

          return Restangular.one("api/administration/user", $route.current.params.id).all("bans").getList();
        },
        title: function () {
          return "Detalle";
        }
      },
      label: "Detail User"
    })
});

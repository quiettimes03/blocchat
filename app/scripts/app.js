(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl as room',
          templateUrl: '/templates/home.html'
        });

        $stateProvider
          .state('active', {
            url: '/',
            controller: 'ActiveRoomCtrl as active',
            templateUrl: '/templates/home.html'
          });
    }

    angular
    .module('blocChat', ['ui.bootstrap','ngAnimate', 'firebase', 'ui.router'])
    .config(config);
})();

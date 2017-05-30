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
    }

    function BlocChatCookies($cookies, $uibModal){
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/BlocChatCookies.html',
          controller: 'CookiesCtrl as cookie',
          backdrop: 'static',
          keyboard: false
        });

        modalInstance.result.then(function(username) {
            this.username = username;
            $cookies.put('blocChatCurrentUser', this.username);
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log(currentUser);
        });
      }
}
    angular
    .module('blocChat', ['ui.bootstrap','ngCookies', 'ngAnimate', 'firebase', 'ui.router'])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

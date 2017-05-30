(function(){
    function CookiesCtrl($uibModalInstance){
        var cookie = this;
        cookie.username = '';
        cookie.ok = function () {
            console.log(cookie.username);
            $uibModalInstance.close(cookie.username);
        };
  }


angular
.module('blocChat')
.controller('CookiesCtrl', ['$uibModalInstance', CookiesCtrl]);
})();

(function(){
    function RoomCtrl(Room){
          this.homePage = Room;
    }

    angular
      .module('blocChat')
      .controller('RoomCtrl', ['Room', RoomCtrl]);
})();

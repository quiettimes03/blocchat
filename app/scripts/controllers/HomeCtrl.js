(function(){
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.activateRoom = function(room){
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

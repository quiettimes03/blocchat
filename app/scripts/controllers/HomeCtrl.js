(function(){
    function HomeCtrl(Room, Message, $cookies) {
        this.rooms = Room.all;
        this.activateRoom = function(room){
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };

        this.sendMessages = function(newMessage){
          console.log(newMessage);
          Message.send(newMessage, this.activeRoom);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();

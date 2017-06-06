(function(){
    function Message($firebaseArray, $cookies, $filter, Room){
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId){
          return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };

        Message.send = function(newMessage, activeRoom){
          var date = new Date();
          var post = {
            content: newMessage,
            username: $cookies.get('blocChatCurrentUser'),
            roomId: activeRoom.$id,
            sentAt: $filter('date')(date, 'shortTime')
          };
          messages.$add(post);
        };

        return Message;

    }

    angular
      .module('blocChat')
      .factory('Message',['$firebaseArray', '$cookies', '$filter', Message]);
})();

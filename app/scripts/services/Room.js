(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addFunc = function(name){
      rooms.$add({name: name}).then(function(ref){
        var id = ref.key;
        console.log("Added a record with id " +id);
        rooms.$indexFor(id);
      });
    };

    var activateRoom = function(rooms){
        var activeRoom = rooms;
    };

    return {
      all: rooms,
      add: addFunc,
      activate: activateRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

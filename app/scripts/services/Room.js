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

    return {
      all: rooms,
      add: addFunc
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

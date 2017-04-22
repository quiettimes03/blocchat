      angular
      .module('blocChat')
      .controller('NewRoomCtrl', function ($uibModal, $log, $document, Room) {
        var $ctrl = this;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size, parentSelector) {
          var parentElem = parentSelector ?
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'NewRoom.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
          });
        };
      });


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.



angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', function (Room, $uibModalInstance) {
  var $ctrl = this;
  $ctrl.name = '';
  $ctrl.ok = function () {
    console.log($ctrl.name);
    Room.add($ctrl.name);
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

function ContactTagController() {
  this.$onInit = () => {
    this.tags = [
      'friends',
      'family',
      'acquintances',
      'following'
    ];
  };
  this.$onChanges = (changes) => {
    if (changes.tag) {
      this.tag = angular.copy(this.tag);
    }
  };
  this.updateTag = (tag) => {
    this.onChange({
      $event: {
        tag: tag
      }
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactTagController', ContactTagController);

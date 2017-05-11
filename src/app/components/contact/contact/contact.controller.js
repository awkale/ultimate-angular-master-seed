function ContactController() {
  this.selectContact = () => {
    this.onSelect({
      $event: {
        contactId: this.contact.$id
      }
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactController', ContactController);

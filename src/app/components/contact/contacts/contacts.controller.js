function ContactsController($state) {
  this.goToContact = (event) => {
    $state.go('contact', {
      id: event.contactId
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);

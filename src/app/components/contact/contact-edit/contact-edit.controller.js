function ContactEditController($state, ContactService, cfpLoadingBar, $window) {
  this.updateContact = (event) => {
    cfpLoadingBar.start();
    return ContactService
      .updateContact(event.contact)
      .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
  };
  this.deleteContact = (event) => {
    let message = `Delete ${event.contact.name} from contacts?`
    if ($window.confirm(message)) {
      return ContactService
        .deleteContact(event.contact)
        .then(() => {
          $state.go('contacts');
        });
    }
  };
}

angular
  .module('components.contact')
  .controller('ContactEditController', ContactEditController);

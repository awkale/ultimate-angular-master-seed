function ContactsController($filter, $state) {
  let contacts = this.contacts;
  this.$onInit = () => {
    this.filteredContacts = $filter('contactsFilter')(this.contacts, this.filter);
  };
  this.goToContact = (event) => {
    $state.go('contact', {
      id: event.contactId
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);

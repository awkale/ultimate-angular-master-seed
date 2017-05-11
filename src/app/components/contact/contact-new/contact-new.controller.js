function ContactNewController(ContactService, $state) {
  this.$onInit = () => {
    this.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tag: 'none'
    };
  };
  this.createNewContact = (event) => {
    return ContactService
      .createNewContact(event.contact)
      .then((contact) => {
        $state.go('contact', {
          id: contact.key
        });
      });
  };
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController);

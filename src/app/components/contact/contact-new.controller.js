function ContactNewController(ContactService) {
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
        console.log(contact);
      });
  };
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController);

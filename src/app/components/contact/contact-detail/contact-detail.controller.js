function ContactDetailController() {
  this.$onInit = () => {
    this.isNewContact = !this.contact.$id;
  };
  this.saveContact = () => {
    this.onSave({
      $event: {
        contact: this.contact
      }
    });
  };
  this.updateContact = () => {
    this.onUpdate({
      $event: {
        contact: this.contact
      }
    });
  };
  this.deleteContact = () => {
    this.onDelete({
      $event: {
        contact: this.contact
      }
    });
  };
  this.tagChange = (event) => {
    this.contact.tag = event.tag;
    this.updateContact();
  };
}

angular
  .module('components.contact')
  .controller('ContactDetailController', ContactDetailController);

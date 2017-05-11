function ContactService(AuthService, $firebaseRef, $firebaseArray) {
  let ref = $firebaseRef.contacts;
  let uid = AuthService.getUser().uid;
  return {
    createNewContact: (contact) => {
      return $firebaseArray(ref.child(uid)).$add(contact);
    }
  };
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);

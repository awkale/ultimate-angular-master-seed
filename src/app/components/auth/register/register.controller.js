function RegisterController(AuthService) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    };
  };
  this.createUser = (event) => {
    return AuthService
      .register(event.user)
      .then(() => {
        console.log('Success!');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);

function RegisterController(AuthService, $state) {
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
        $state.go('app');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);

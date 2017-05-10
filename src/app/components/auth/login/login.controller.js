function LoginController(AuthService, $state) {
  this.$onInit = () => {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    };
  };
  this.loginUser = (event) => {
    return AuthService
      .login(event.user)
      .then(() => {
        // fully authorized
        $state.go('app');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);

function LoginController(AuthService) {
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
        console.log('Success!');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);

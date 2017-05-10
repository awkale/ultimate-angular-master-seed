function AppController(AuthService, $state) {
  this.user = AuthService.getUser();
  this.logout = () => {
    AuthService.logout().then(() => {
      $state.go('auth.login');
    });
  };
}

angular
  .module('common')
  .controller('AppController', AppController);

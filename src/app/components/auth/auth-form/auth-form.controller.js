function AuthFormController() {
  this.$onChanges = (changes) => {
    if (changes.user) {
      this.user = angular.copy(this.user);
    }
  };
  this.submitForm = () => {
    this.onSubmit({
      $event: {
        user: this.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);

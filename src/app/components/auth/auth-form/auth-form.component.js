let authForm = {
  bindings: {
    user: '<', // one way data
    button: '@', // interpolated string
    message: '@',
    onSubmit: '&' // callback function
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
};

angular
  .module('components.auth')
  .component('authForm', authForm);

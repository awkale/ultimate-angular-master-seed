/**
 *
 * @ngdoc module
 * @name components.auth
 *
 * @requires ui.router
 * @requires firebase
 *
 * @description
 *
 * This is the auth module. It includes our auth components
 *
 **/
angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {

    var config = {
      apiKey: "AIzaSyAXgsvhWC9XcDCOQHQjr9fzPryiiWx1e7k",
      authDomain: "contacts-manager-eb093.firebaseapp.com",
      databaseURL: "https://contacts-manager-eb093.firebaseio.com",
      projectId: "contacts-manager-eb093",
      storageBucket: "contacts-manager-eb093.appspot.com",
      messagingSenderId: "717770883211"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });

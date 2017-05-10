function AuthService($firebaseAuth) {
  let auth = $firebaseAuth();
  let authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function onSignIn(user) {
    authData = user;
    return auth.$requireSignIn();
  }
  this.login = (user) => {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.register = (user) => {
    return auth
    .$createUserWithEmailAndPassword(user.email, user.password)
    .then(storeAuthData);
  };
  this.requireAuthentication = () => {
    return auth
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = () => !!authData;
  this.getUser = () => {
    if (authData) {
      return authData;
    }
  };

}

angular
  .module('components.auth')
  .service('AuthService', AuthService);

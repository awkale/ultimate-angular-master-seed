function AuthService($firebaseAuth) {
  let auth = $firebaseAuth();
  let authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
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

}

angular
  .module('components.auth')
  .service('AuthService', AuthService);

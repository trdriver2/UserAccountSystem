user1 = {
  email: "email@email.com",
  password: "123",
  loggedIn: false
};

users = {};

var user = (function() {
  return {
    signUp: function(u) {
      if (!(u in users)) {
        users[u.email] = {
          password: u.password,
          loggedIn: false
        };
      }
      return u;
    },

    signIn: function(email, password) {
      if (email in users && users[email].password === password) {
        users[email].loggedIn = true;
        return { email: email, password: password, loggedIn: true };
      }
      console.log("Incorrect email or password");
      return { email: "", password: "", loggedIn: false };
    },

    signOut: function(u) {
      u.loggedIn = false;
      users[u.email].loggedIn = false;
      return u;
    },

    changePassword: function(u, password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        u.password = password;
        users[u.email].password = password;
      }
      return u;
    }
  };
})();

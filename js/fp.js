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

user.signUp(user1);
user1 = user.signIn(user1.email, user1.password);
//user1 = signOut(user1)
user.changePassword(user1, 789, 789);
//user1 = user.signOut(user1)
console.log(users[user1.email]);

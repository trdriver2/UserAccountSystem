tempDb = {};

class User {
  constructor(email, password, passwordConfirmation = null) {
    this.loggedIn = false;
    this.email = email;
    this.password = password;
  }

  save() {
    //This will save the user to the db
    if (!(this.email in tempDb)) {
      tempDb[this.email] = this.password;
      return this;
    }
    console.log("That user already exists");
    return false;
  }

  authenticate() {
    //This will check credentials and make sure user exists
    if (this.email in tempDb && tempDb[this.email] === this.password)
      this.loggedIn = true;
    else console.log("Incorrect email or password");
    return this;
  }

  deauthenticate() {
    //This will logout an allready logged-in user
    this.loggedIn = false;
    return this;
  }
}

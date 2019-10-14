
 tempDb={}
let userCount = 0

class User{
    constructor(email, password, passwordConfirmation=null){
        this.loggedIn=false;
        this.email=email
        this.info={
            "email":email,
            "password":password,
        }
    }

    save(){ //This will save the user to the db
        if(!(this.email in tempDb)){
            tempDb[userCount]=this.info
            userCount++
            return true;
        }
        
        console.log("That user already exists")
        return false
    }

    authenticate(){ //This will check credentials and make sure user exists
        if(!(this.email in tempDb) && tempDb[this.email] === this.password)
            return true;
        
        console.log("Incorrect email or password")
        return false
            
    }

   // where(key, val){
    //}

    deauthenticate(){ //This will logout an allready logged-in user
        
    }
}

user = new User("email@email.com", 123, 123)
user.save()
user.save()
console.log(tempDb)
user1={
    email:"email@email.com",
    password:"123",
    loggedIn:false
}

users = {}

function signUp(user){
    if(!(user in users)){
        users[user.email]={
            password:user.password,
            loggedIn:false
        }
    }
    return user
}

function signIn(email, password){
    if(email in users && users[email].password === password){
        users[email].loggedIn = true;
        return {email:email, password:password, loggedIn:true}
    }
    console.log("Incorrect email or password")
    return{email:"",password:"",loggedIn:false}
}

function signOut(user){
    user.loggedIn=false
    users[user.email].loggedIn=false
    return user
}

function changePassword(user, password, passwordConfirmation){
    if(password === passwordConfirmation){
        user.password = password
        users[user.email].password=password
    }
    return user
}

signUp(user1)
user1 = signIn(user1.email, user1.password)
//user1 = signOut(user1)
changePassword(user1, 789, 789)
console.log(users[user1.email])
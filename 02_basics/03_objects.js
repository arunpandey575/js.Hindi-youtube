//singleton

//object.create

//object literals

const mySym = Symbol("key1")



const JsUser = {
    name: "Hitman",
    "full name ": "hitman yadav",
    [mySym] : "mykey1",
    age : 39,
    location : "Mumbai",
    email :"hitman6162@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email","age"])  // correct way
// console.log(JsUser["full name"] );/// so i use square bracket
// console.log(JsUser[mySym]);

JsUser.email = "arunpandey123@gmail.com" // agar kuch edit krna ho to
//Object.freeze(JsUser) // ye likh dene se koi bhi edit nhi kr skte hai
JsUser.email ="arun122@.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


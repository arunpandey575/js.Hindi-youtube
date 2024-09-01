//Notes
//there are two datatypes of javascript
 //1. primitive
 // 7 types : String ,number,Boolean, null, undefined , Symbol, BigInt

 const score = 100
 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null
 let userdeTemp ;

 const id = Symbol('123')
 const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 7774543232223n


// 2.Reference (Non primitive)

// Array, Objects ,Functions

const heros = ["Hanuman" ,"shaktiman", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
    }

    const myFunction = function(){
        console.log("Hello world");
    }

    console.log(typeof anotherId );


    // ++++++++++++++++++++++++++++++++++++++++++++++++
///Memory loaction
    // stack (Primitive), Heap (Non-Primitive)
    let myYoutubename = "hiteshchoudharydotcom"
    let anothername = myYoutubename
    anothername ="ChaiAurcode"
    // console.log(anothername);
    // console.log(myYoutubename);

    let userOne = {
        email: "user@google.com",
        upi: "user@ybl"
    }
    let userTwo = userOne
    userTwo.email = "hitesh@google.com"
    console.log(userOne.email);
    console.log(userTwo.email);

const name = "Arun"
const repocount = 50

//it is old method
//console.log(name+repocount); 
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

//notes
//dollor and middle bracket is use for inject
// Ii is Called string interpullation

const gameName = new String('ARUN-EX')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = " Hitesh"
console.log(newString);
console.log(newString.trim);

const url = "https://hitesh.com/hitesh%20choudry"
console.log(url.replace('%20','-'));
console.log(url.includee('sunder'));
console.log(url.split('-'));
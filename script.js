console.log("Hello, World!");
console.log ("From script.js file.");

const myName = "Arabelle";
let age = 18;
age = 20;
 myNumber = 9638409151;
 myaddress = "Manapla";


console.log (`My name is ${myName}, ${age} yrs old.`);
console.log (`Number: ${myNumber}`);
console.log (`Address: ${myaddress}`);
console.log(67);

function greet(greetings, names = []){
        if(Array.isArray(names)){
            names= names.join(',');
        }
    return`${greetings} sa enyu, ${names}`;
}
console.log(greet("Mayong aga" , ["Arabelle" , "Bai" , "Soy" , "Erp"]));


       
// If - If determined conditions is true, execute that code, else, do something else
let age = 25;
if (age >= 18) {
    console.log('You are old than 18 years')
} else {
    console.log('You are young')
}


let isStudent = false;
let haveCard = true;
let price = 90;
let discount = null;

if (isStudent == true && haveCard == true) {
    discount = 30;
    price = price - (discount / 100) * price;
    console.log('The price is ' + price);
} else if (isStudent == true || haveCard == true) {
    discount = 15;
    price = price - (discount / 100) * price;
    console.log('The price is ' + price);
}
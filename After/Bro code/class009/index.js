//this = referência a um objeto particular
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${car1.model}`); //Ou poder substituir pelo nome do array + model.
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
//nesse caso, se não usar o this, resultará em um erro, pois há 2 model.

car1.drive();
car2.drive();
// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var deepDish = pizzaOven("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
var handTossed = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]); 
var elena = pizzaOven("thick", "ricotta", ["mozzarella"], ["chicken", "garlic", "mushrooms"]);
var southwest = pizzaOven("stuffed", "marinara", ["mozzarella"], ["jalapeno", "chicken", "mushroom"]);

console.log(deepDish)
console.log(handTossed)
console.log(elena)
console.log(southwest)
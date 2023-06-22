//Title: shopping-cart.js
//Author: Kyle Hochdoerfer
//Date: 6/19/23
//Description: JavaScript class for hochdoerfer-bobs-auto-repair.js

//Declare and export a Shopping Cart class
export class ShoppingCart{
    //Initialize the class with a constructor that creates an empty products array
    constructor(){
        this.products = [];
    }

    //Declare a class function that returns the length of the array
    count(){
        return this.products.length
    }

    //Declare a function for adding products to the array
    add(product){
        //Push the product parameter onto the array
        this.products.push(product);
    }

    //Declare an iterator that loops through products and yields each one
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product
        }
    }
}
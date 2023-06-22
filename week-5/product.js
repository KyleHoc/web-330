//Title: product.js
//Author: Kyle Hochdoerfer
//Date: 6/19/23
//Description: JavaScript class for hochdoerfer-bobs-auto-repair.js

//Declare and export a Product class
export class Product {
    //Declare a constructor for product, initializing a name and price
    constructor(name, price){
        this.name = name;
        this.price = price;

        //Initialize id to a random number with a base of 16
        this.id = Math.random().toString(16).slice(2);
    }
}
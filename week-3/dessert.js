//Title: dessert.js
//Author: Kyle Hochdoerfer
//Date: 6/06/23
//Description: JavaScript for restaurant.html

//Import the product object from product.js
import { Product } from "./product.js";

//Initialize a Dessert class that inherits from Product
export class Dessert extends Product{
    constructor(name, price){
        //Initialize the name and price of a dessert object
        super(name, price);
    }
}
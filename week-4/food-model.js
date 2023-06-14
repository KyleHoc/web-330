//Title: food-model.js
//Author: Kyle Hochdoerfer
//Date: 6/12/23
//Description: JavaScript class for calorie converter.js

//Declare a Food Model class with values of id, name and calories
export class FoodModel{
    //Initialize the values of id, name, and calories with a constructor
    constructor(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}
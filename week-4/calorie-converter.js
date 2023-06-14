//Title: calorie-converter.js
//Author: Kyle Hochdoerfer
//Date: 6/12/23
//Description: Main JavaScript for hochdoerfer-calorie.html

//Import the foodModel class from food-model.js
import { FoodModel } from "./food-model.js";

//Create and export the CalorieCounter class
export class CalorieConverter {
    //Create a static variable for holding five food items
    static data = [new FoodModel(1007, "Egg", 78),
                   new FoodModel(1008, "Apple", 95),
                   new FoodModel(1009, "Hamburger", 354),
                   new FoodModel(1010, "Fries", 400),
                   new FoodModel(1011, "Banana", 105),
                   new FoodModel(1012, "Soda", 150)];
    
    //Declare a static function for finding food items
    static find(string){
        //Filter the data variable to locate an item who's name matches string input
        let result = CalorieConverter.data.filter(food => food.name.toLowerCase() == string);
        //Return the result
        return result;
    }
}
//Title: bill.js
//Author: Kyle Hochdoerfer
//Date: 6/06/23
//Description: JavaScript for restaurant.html

//Declare a new class, Bill
export class Bill {
    constructor(_beverages, _desserts, _mainCourses, _appetizers){
        //Initialize all parameters to an empty array
        this._beverages = [];
        this._desserts = [];
        this._appetizers = [];
        this._mainCourses = [];
    }

    //Declare a function for adding a new beverage item
    addBeverage(beverage){
        //Push a new beverage item onto the array
        this._beverages.push(beverage);
    }

    //Declare a function for adding a new appetizer item
    addAppetizer(appetizer){
        //Push a new appetizer item onto the array
        this._appetizers.push(appetizer);
    }

    //Declare a function for adding a new main course item
    addMainCourse(mainCourse){
        //Push a new main course item onto the array
        this._mainCourses.push(mainCourse);
    }

    //Declare a function for adding a new dessert item
    addDessert(dessert){
        //Push a new dessert item onto the array
        this._desserts.push(dessert);
    }

    //Declare a function for getting the total value of all selected items
    getTotal(){
        //Initialize a "total" variable at zero
        let total = 0;

        //Get the total of all chosen beverages and add it to the overall total
        let beverageTotal = this._beverages.forEach(function(beverage){
            total += parseFloat(beverage.price);
        })

        //Get the total of all chosen appetizers and add it to the overall total
        let appetizerTotal = this._appetizers.forEach(function(appetizer){
            total += parseFloat(appetizer.price);
        })

        //Get the total of all chosen main courses and add it to the overall total
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse){
            total += parseFloat(mainCourse.price);
        })

        //Get the total of all chosen desserts and add it to the overall total
        let dessertTotal = this._desserts.forEach(function(dessert){
            total += parseFloat(dessert.price);
        })

        //Return the total set to two decimal points
        return total.toFixed(2);
    }
}
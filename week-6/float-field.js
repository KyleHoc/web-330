//Title: float-field.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Declare and export a float field class
export class FloatField{
    //Declare a constructor to initialize a name and field for the object
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    //Declare a validation function
    validate(){
        //If the object's field value is a number
        if(!isNaN(this.field)){
            //Return true
            return true;
        } else {
            //Otherwise, return false
            return false;
        }
    }

    //Declare a function to get a message
    getMessage(){
        //Return a string message stating that the field value must be a float value
        return this.name + " must be a float value. You entered " + this.field;
    }
}
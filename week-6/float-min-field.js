//Title: float-min-field.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Declare and export a float max field class
export class FloatMinField{
    //Declare a constructor to initialize a name and field for the object
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }

    //Declare a validation function
    validate(){
        //If the object field is greater than the min value:
        if(parseFloat(this.field) > this.min){
            //Return true
            return true;
        } else {
            //Return false
            return false;
        }
    }

    //Declare a function to get a message
    getMessage(){
        //Return a string message stating that the field value must be greater than the min value
        return this.name + " must be greater than " + this.min + ". You entered " + this.field;
    }
}
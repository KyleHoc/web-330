//Title: float-max-field.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Declare and export a float max field class
export class FloatMaxField{
    //Declare a constructor to initialize a name and field for the object
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

    //Declare a validation function
    validate(){
        //If the object field is less than the max value:
        if(parseFloat(this.field) < this.max){
            //Return true
            return true;
        } else {
            //Return false
            return false;
        }
    }

    //Declare a function to get a message
    getMessage(){
        //Return a string message stating that the field value must be less than the max
        return this.name + " must be less than " + this.max + ". You entered " + this.field;
    }
}
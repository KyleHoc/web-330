//Title: required-field.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Declare and export a required field class
export class RequiredField{
    //Declare a constructor to initialize the object's name and field
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    //Declare a validation function
    validate(){
        //If the object's field is a string:
        if (typeof this.field === 'string'){
            //Return true
            return true;
        } else {
            //Otherwise, return false
            return false;
        }
    }


    //Declare a function to get a message
    getMessage(){
        //Return a message about a required field
        return this.name + " is a required field";
    }
}
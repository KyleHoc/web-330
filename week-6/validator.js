//Title: validator.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Import field objects from the other JavaScript files
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMaxField } from "./float-max-field.js";
import { FloatMinField } from "./float-min-field.js"

//Declare a validator class
export class Validator{
    //Declare validators and messages as empty arrays
    validators = [];
    messages = [];

    //Declare a constructor to initialize name and field variables
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    //Declare a function to add a required field
    addRequiredField(){
        //Push a new field onto the validators array
        this.validators.push(new RequiredField(this.name, this.field));
    }

    //Declare a function to add a float field
    addRequiredFloatField(){
        //Push a new field onto the validators array
        this.validators.push(new FloatField(this.name, this.field))
    }

    //Declare a function to add a float max field
    addFloatMaxField(max){
        //Push a new field onto the validators array
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    //Declare a function to add a float min field
    addFloatMinField(min){
        //Push a new field onto the validators array
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    //Declare a validation function
    validate(){
        //For each member of the validators array
        for(let input of this.validators){
            //If the current member's validate function returns false:
            if(!input.validate()){
                //Push the current input's message onto the array
                this.messages.push(input.getMessage());

                //Return false
                return false;
            }
        }
        
        //Return true once every member of validators is successfully validated
        return true;
    }

}
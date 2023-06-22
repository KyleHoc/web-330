//Title: cart-component.js
//Author: Kyle Hochdoerfer
//Date: 6/19/23
//Description: JavaScript class for hochdoerfer-bobs-auto-repair.js

//Declare a class CartComponent that extends HTMLElement
class CartComponent extends HTMLElement{
    //Call super() in the constructor to initialize Cart Component
    constructor(){
        super();
    }

    //Declare a function for setting the HTML of the component
    connectedCallback(){
        //Set the innerHTML of the component to a shopping cart icon
        this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`
    }
}

//Define the custom element as "cart-component"
customElements.define("cart-component", CartComponent);
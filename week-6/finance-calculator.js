//Title: finance-calculator.js
//Author: Kyle Hochdoerfer
//Date: 6/26/23
//Description: JavaScript class for hochdoerfer-future-value.html

//Declare and export a float max field class
export class FinanceCalculator{
    //Declare a static property for the number of months in a yar
    static MONTHS_IN_YEAR = 12;

    //Declare a static function for calculating future values
    static calculateFutureValue(monthlyPayment, rate, years){
        //Calculate variables for month, interest rate, present value, and future value, using the parameters
        let month = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));

        //Return the future value variable at two decimal places
        return futureValue.toFixed(2);
    }

    //Declare a static function for converting currency
    static convertToCurrency(field){
        //Declare a variable to format currency to USD
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        //Return the currency formatter
        return currencyFormatter.format(field);
    }
}
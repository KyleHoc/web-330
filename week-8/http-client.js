//Title: http-client.js
//Author: Kyle Hochdoerfer
//Date: 7/10/23
//Description: JavaScript class for hochdoerfer-whatabook2.html

//Export and declare an httpClient class
export class HttpClient {
    async get(url, params) {
        //Create a new url object
        url = new URL(url);

        //Instantiate a new URLSearchParams object, supplying it the params parameter and assigning it to the url.search property
        url.search = new URLSearchParams(params);

        //Create an object literal named res and use the fetch() API to pass in the url.toString() variable and specify the request as a GET request
        const res = await fetch(url.toString(), {
            method: "GET",
        })

        //Return res as json
        const data = await res.json();
        return data;
    }
}


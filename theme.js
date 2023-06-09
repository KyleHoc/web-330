//Title: theme.js
//Author: Kyle Hochdoerfer
//Date: 5/23/23
//Description: JavaScript for index.html
//Source code: https://github.com/buwebdev/web-330/blob/master/week-0/theme.js

/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
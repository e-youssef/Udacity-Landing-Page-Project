/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// In this section some variables are declared to be used in functions later
// Extracting the navigation menu element from the document
let navMenu = document.getElementById('navbar__list');
// Extracting the section elements from the document
let sections = document.querySelectorAll ('section');
// creating a fragment to append the list items to it for better performance
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// In this section some functions are formed to be used later in the code
// This function is created to be used in the window.onscroll function to display the 'go to top' button and scroll to top when clicked
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
    // adding event listener with a function to send the user to the top when clicking the 'go to top' button
    button.addEventListener('click', function goToTopFunction(){
      document.documentElement.scrollTop = 0;
    });
  } else {
    button.style.display = 'none';
  };
};

// This function is created to be used in the window.onscroll function to move the active class to the section in the viewport.
function viewport(){
  sections.forEach(section=> {
    // Extracting the section boundary dimensions.
  let dim = section.getBoundingClientRect();
  // setting the top values
  if(dim.top>0 && dim.top < 150) {
    let sections = document.querySelectorAll ('section');
    sections.forEach(section=> {
      //removing the active class from the section outside the viewport
      section.classList.remove('your-active-class');
    });
    //adding the active class to the section inside the viewport
    section.classList.add('your-active-class');
  };
});
};

/**
 * End Helper Functions
 * Begin Events
 *
*/

// build the nav
//add list items with links in them that scrolls down to the relevant section
sections.forEach (section => {
  // Create list element and store it in a variable
  let li = document.createElement('li');
  // Create link element and store it in a variable
  let a = document.createElement('a');
  // Extracting the sections 'data-nav' attributes to use them as the link texts inside the 'a' element
  let datanav = section.getAttribute ('data-nav');
  // Extracting the sections 'id' attributes to use them in the 'href' attribure inside the 'a' element
  let secid = section.getAttribute ('id');
  // Adding text inside the 'a' element
  let atext = document.createTextNode(datanav);
  //setting the navigation menu item style class
  li.classList.add('menu__link', 'navbar__menu')
  // adding an 'href' attribute to the 'a' elements to link them to the sections with the 'id' values of each section
  a.setAttribute('href', '#'+ secid)
  // adding / appending the text node to the 'a' element
  a.appendChild(atext)
  // adding / appending the 'a' element under the 'li' element
  li.appendChild(a)
  //Using fragment for better performance and adding / appending all the created 'li' elements to it
  fragment.appendChild(li)
});
// adding / appending the fragment with all its inclusions under the navigation menu unordered list
navMenu.appendChild(fragment);


// Responsive navigation bar
// Creating a 'li' element and storing it in a variable
const responsiveList = document.createElement('li');
// Creating a 'a' element and storing it in a variable
const responsiveLink = document.createElement('a');
// Creating a 'i' element and storing it in a variable
const iElement = document.createElement('i');
//Setting the 'a' and 'li' elements attributes to include
responsiveLink.setAttribute('href', 'javascript:void(0);');
responsiveLink.setAttribute('class', 'icon');
responsiveLink.setAttribute('onclick','responsiveFunction()');
responsiveList.classList.add('menu__link', 'navbar__menu');
//Setting the icon shape to be 3 dashes (fa fa-bars)
iElement.classList.add('fa', 'fa-bars');
//Adding / appending the 'i' element under the 'a' element
responsiveLink.appendChild(iElement);
//Adding / appending the 'a' element under the navigation menu unordered list
navMenu.appendChild(responsiveLink);

//This function is created to run upon clicking the menu icon that appears when the screen is less than 600px width
//The function adds and removes the 'responsive' class upon clicking the menu icon to show the list of section links we have
function responsiveFunction() {
  let x = document.getElementById("navbar__list");
//If statement telling the console when to add and when to remove the 'responsive' class from the 'ul' element
  if (x.className === "navbar__menu") {
    x.className += " responsive";
  } else {
    x.className = "navbar__menu";
  }
}
/**
 *
 *
*/

// Build the 'Go to top' topbutton
// Creating a button
const button = document.createElement('button');
// Extracting the main section
const main = document.querySelector ('main');
// setting the type attribute of the button
button.setAttribute('type', 'button');
// adding styling class to the button
button.classList.add('topbutton');
// adding text to the button
button.textContent = 'Go to Top';
// adding / appending the button under the main element in the document
main.appendChild(button);


// On scroll, add class 'active' to section when near top of viewport and display the 'go to top' button
// using  this function to activate 2 functions on scroll
window.onscroll = function() {
  viewport()
  scroll();
};

// Scroll to anchor ID using scrollTO event - I used an alternative solution in the CSS style sheet using this code (html {scroll-behavior: smooth;})

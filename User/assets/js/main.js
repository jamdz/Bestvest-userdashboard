let getYear = document.querySelector (".get-year");

let date = new Date();

let myDate = date.getFullYear();

getYear.textContent = `@ Copyright ${myDate}, All Rights Reserved.`;
console.log(myDate);


let mySideNav = document.querySelector (".side-nav");
let myhHamburger = document.querySelector (".hamburger1");
let myCloseNav = document.querySelector (".closechannel");

myhHamburger.addEventListener ("click", function () {

mySideNav.classList.toggle ("show");

myCloseNav.addEventListener("click", function () {
    
    mySideNav.classList.toggle ("close");

    // mySideNav.style.display = "none";

    // mySideNav.style.display = "none";

});
    
});

let getPayment = document.querySelector (".div-cont-button");
let getModal = document.querySelector (".myModal");
let inputModal = document.querySelector (".moadl-number");
let myButtonModal = document.querySelector (".modal-btn");
let myCloseModal = document.querySelector (".modal-close-btn");

getPayment.addEventListener ("click", function(){


getModal.style.display = "block";

myButtonModal.addEventListener("click", function () {
 
    if (inputModal.value == ""){

        return alert ("Input Should Not Be Left Blank");
}else{
    
    inputModal.value = "";
    
}});

myCloseModal.addEventListener("click", function ()  {  // This is for Closing the modal button.
    
getModal.style.display = "none";

});

// console.log ("Am Working");

});


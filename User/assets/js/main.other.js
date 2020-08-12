

let investModal = document.querySelector (".invest-modal");
let investForm = document.querySelector ("#invest-form");
let investButton = document.querySelector (".div-cont-investment-01-header-btn");
let investNumber = document.querySelector (".invest-moadl-number");
let investCloseBtn = document.querySelector (".invest-modal-close-btn");

investButton.addEventListener ("click", function(){


    investModal.style.display = "block";
    
    investForm.addEventListener("submit", function () {
     
        if (investNumber.value == ""){
    
            return alert ("Input Should Not Be Left Blank");
    }else{
        
        investNumber.value = "";
        
    }});
    
    investCloseBtn.addEventListener("click", function ()  { 
        
        investModal.style.display = "none";
    
    });
    
});

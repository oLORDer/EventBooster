'use strict'
 const selected =document.querySelector(".selected");
 const optionsContainer = document.querySelector(".options-container");

 const optionsList = document.querySelectorAll(".option");

 selected.addEventListener("click",()=>{
    optionsContainer.classList.toggle("active");
    
    searchBox.value ="";
    filterList("");

    if(optionsContainer.classList.contains("active")){
        searchBox.focus();
    }
    
});

optionsList.forEach(o => {
    o.addEventListener("click",() => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});







const ekleBtn=document.querySelector(`#btnAddNewTask`);




ekleBtn.addEventListener(`click`,function(){
    console.log("burhan");
})

const temizleBtn=document.querySelector(`#btnClear`);



temizleBtn.addEventListener(`click`,function(e){
   
    e.target.classList.add("btn-lg")
})
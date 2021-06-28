var tdtag = document.querySelectorAll('td');
tdtag.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.toggle("changebg");
    })
});
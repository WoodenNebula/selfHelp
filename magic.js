const btnRemoveMagic = document.querySelector(".btnAddMagic")
const btnAddMagic = document.querySelector(".btnRemoveMagic")
const mouseField = document.querySelector(".field")

function displayInside(){
    mouseField.setAttribute("placeholder", "Inside")
}
function displayOutside(){
    mouseField.setAttribute("placeholder", "Outside")
}

mouseField.addEventListener("mouseenter", displayInside)
mouseField.addEventListener("mouseout", displayOutside)

btnRemoveMagic.addEventListener("click", ()=>{
    mouseField.removeEventListener("mouseenter", displayInside)
})

btnAddMagic.addEventListener("click", ()=>{
    mouseField.addEventListener("mouseenter", displayInside)
})
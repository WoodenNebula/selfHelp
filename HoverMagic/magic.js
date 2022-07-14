const btnAddMagic = document.querySelector(".btnAddMagic")
const btnRemoveMagic = document.querySelector(".btnRemoveMagic")
const mouseField = document.querySelector(".field")

function displayInside(){
    mouseField.setAttribute("placeholder", "Inside")
}
function displayOutside(){
    mouseField.setAttribute("placeholder", "Outside")
}


btnAddMagic.addEventListener("click", ()=>{
    mouseField.addEventListener("mouseenter", displayInside)
    mouseField.addEventListener("mouseout", displayOutside)

})

btnRemoveMagic.addEventListener("click", ()=>{
    mouseField.removeEventListener("mouseenter", displayInside)
    mouseField.removeEventListener("mouseout", displayOutside)
    mouseField.setAttribute("placeholder", "Magic Stopped")
})

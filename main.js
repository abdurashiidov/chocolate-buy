const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const neshta = document.querySelector(".neshta")
const narxi = document.querySelector(".narxi")

let defaults = 0
let ozgaruvchi = 0
let narx = 0
minus.disabled = true 

plus.addEventListener("click", () => {
    minus.disabled = false
    ozgaruvchi += 1
    narx += 2
    neshta.textContent = ozgaruvchi
    narxi.textContent = narx
})

minus.addEventListener("click", () => {
    if(ozgaruvchi == defaults){
        minus.disabled = true
    } else{
        ozgaruvchi -= 1
    }
    neshta.textContent = ozgaruvchi

})




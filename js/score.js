const scoreDiv=document.querySelector(".nb-star")
let num=0
export function addScore() {
    num+=10
    scoreDiv.textContent=num
}
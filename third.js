nums = document.querySelectorAll(".stats")
num = document.querySelectorAll(".number")
started = false

num.forEach((num) => startCount(num));

window.onscroll = function () { 
    if (window.scrollY >= nums.offsetTop) {
        if (!started) {
            num.forEach((num) => startCount(num))
        }
        started = true
    }
}
function startCount(el){
let goal = el.getAttribute("data-goal")
let count = setInterval(() => {
    el.textContent++;
if(el.textContent === goal){
clearInterval(count)
}
},2000 / goal)
}
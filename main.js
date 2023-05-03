const background = document.getElementById('background')
const btn = document.querySelector('#color')
const main = document.querySelector(".main")


let colorArr = ['red', 'green', 'blue', 'pink', 'yellow', 'gray', 'orange', 'purple']

btn.addEventListener("click", function(){
    let randomColor = colorArr[getRandomColor()];
    main.style.backgroundColor = randomColor;
    background.textContent = randomColor
});
function getRandomColor() {
    return Math.floor(Math.random()*colorArr.length);
}
console.log(getRandomColor());
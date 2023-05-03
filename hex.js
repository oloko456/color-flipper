const btn = document.querySelector('#color')
const background = document.getElementById('background')
const main = document.querySelector('.main')

let colorArr = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function () {

    hexagonal = "#";
    for ( i = 0; i < 6; i++) {
        hexagonal += colorArr[getRandomColor()];
    }
    console.log(hexagonal);
   main.style.backgroundColor = hexagonal
   background.textContent =hexagonal
})

function getRandomColor () {
    return Math.floor(Math.random()*colorArr.length)
}

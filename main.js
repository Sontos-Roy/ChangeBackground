const btn = document.getElementById("btn");

const body = document.body;

const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'pink'];

body.style.backgroundColor = colors[0];

btn.addEventListener("click", changebackgroundcolor);

function changebackgroundcolor(){
    const colorIndex = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

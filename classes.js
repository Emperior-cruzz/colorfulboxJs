//color changing btn

const changeColorBtn = document.getElementById('changecolors');

changeColorBtn.addEventListener('click', () => {
    let colors = ['yellow', 'red', 'blue', 'green', 'pink', 'purple', 'white', 'black'];
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
});
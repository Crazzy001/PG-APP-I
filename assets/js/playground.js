/* Pfad: 0playground/assets/js/playground.js */

document.getElementById('black-btn').addEventListener('click', function() {
    setBackgroundColor('#000000');
});

document.getElementById('white-btn').addEventListener('click', function() {
    setBackgroundColor('#ffffff');
});

document.getElementById('wallpaper-btn').addEventListener('click', function() {
    setBackgroundImage('assets/images/86.jpg');
});

function setBackgroundColor(color) {
    document.querySelector('.playground-container').style.background = color;
}

function setBackgroundImage(imagePath) {
    document.querySelector('.playground-container').style.background = `url('${imagePath}') no-repeat center center fixed`;
    document.querySelector('.playground-container').style.backgroundSize = 'cover';
}

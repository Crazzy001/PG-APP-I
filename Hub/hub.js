document.addEventListener('DOMContentLoaded', function() {
    const glassElement = document.createElement('div');
    glassElement.classList.add('glass-element');
    glassElement.innerHTML = `
        <div class="glassboard-text">
            <h1>GlassBoard</h1>
            <h2>DESIGNED BY GPT & CRAZZYDESIGN</h2>
        </div>
    `;
    document.querySelector('.playground-container').appendChild(glassElement);

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
});

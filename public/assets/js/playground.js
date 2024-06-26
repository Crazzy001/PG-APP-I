// Pfad/Filename: /mnt/f/MAD_AI/madui/0playground/assets/js/playground.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-a').addEventListener('click', function() {
      alert('Button A clicked!');
    });
  
    document.getElementById('btn-b').addEventListener('click', function() {
      alert('Button B clicked!');
    });
  
    document.getElementById('btn-black').addEventListener('click', function() {
      document.getElementById('background-layer').style.background = 'black';
    });
  
    document.getElementById('btn-white').addEventListener('click', function() {
      document.getElementById('background-layer').style.background = 'white';
    });
  
    document.getElementById('btn-wallpaper').addEventListener('click', function() {
      document.getElementById('background-layer').style.background = "url('assets/images/86.jpg') no-repeat center center fixed";
      document.getElementById('background-layer').style.backgroundSize = 'cover';
    });
  });
  
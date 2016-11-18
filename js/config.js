var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height;

var animationFrameId = -1,
    gap = 30,
    topSpeed = 10;

var mouseX = w / 2,
    mouseY = h / 2;

var movers = [],
    moversClient = 20;
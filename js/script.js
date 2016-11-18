function setupMovers()
{
    for(var i = 0; i <  moversClient; i++) {
        movers[i] = new Movers();
    }
}

function draw()
{
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.restore();

    for(var i = 0; i < movers.length; i++) {
        movers[i].update(mouseX, mouseY);
        movers[i].display();
    }

    animationFrameId = requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e)
{
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
});

window.onload = function()
{
    setupMovers();
    draw();
};
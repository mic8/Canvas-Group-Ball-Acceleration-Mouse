function Movers()
{
    this.position = new Vector(Math.floor(Math.random() * w), Math.floor(Math.random() * h));
    this.velocity = new Vector(0, 0);

    this.mouse = null;
    this.acceleration = null;
    this.dir = null;
}

Movers.prototype.update = function(mouseX, mouseY)
{
    this.mouse = new Vector(mouseX, mouseY);

    this.dir = Vector.div(this.mouse, this.position);
    this.dir.normalize();
    this.dir.mult(0.6);

    this.acceleration = this.dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(topSpeed);

    this.position.add(this.velocity);
};

Movers.prototype.display = function()
{
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, gap, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};
var CONST = require('../CONST.js');
var direction = 1;
var Player = function(params)
{
    this.x = params.x || 10;
    this.y = params.y || 10;
    this.color = params.color || 'green';
    this.speed = 10;

    this.draw = function()
    {
        CONST.ctx.fillStyle = this.color;
        CONST.ctx.fillRect(this.x, this.y, 10, 10);
    }

    this.move = function()
    {
        this.x += CONST.direction.x * this.speed >> 0;
        this.y += CONST.direction.y * this.speed >> 0;
    }   

    this.update = function()
    {
        this.draw();
        this.move();
    }
}

module.exports = Player;

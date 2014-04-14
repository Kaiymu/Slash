var CONST               = require('./const.js'),
    keyboardManager     = require('./managers/keyboardManager.js');

window.requestAnimFrame =     (
    function(){
        return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback, element){
            window.setTimeout(callback, 1000 / 5);
        };
    }
)();
function gameloop()
{
    requestAnimFrame(gameloop);
    CONST.ctx.fillStyle = "black";
    CONST.ctx.fillRect(0,0,canvas.width, canvas.height);
    keyboardManager.intInputsValue();
    CONST.Player.update();
    CONST.eventManager.emit('update');
    gamePads();
}

// GamePad 1 = 0, 1
// GamePad 2 = 2, 3

function gamePads()
{
    gamepads = Gamepad.getStates();

    for(var i = 0; i < gamepads.length; i++)
    {
        if(gamepads[i]){

            if(gamepads[i].axes[0] > 0.3 || gamepads[i].axes[0] <- 0.3 || gamepads[i].axes[1] > 0.3 || gamepads[i].axes[1] <- 0.3){
                CONST.direction.x = gamepads[i].axes[0];
                CONST.direction.y = gamepads[i].axes[1];
            }
            else {
                CONST.direction.x = 0;
                CONST.direction.y = 0;
            }
            
        }
        else 
            return false;
    }
}

module.exports = {
    "gameloop" : gameloop
};


/*
var gamePadFrameBefore =[];
var currentGamepad = [];
var gamepads ;
function testGamepad (undefined){
    gamepads = navigator.webkitGetGamepads();

    for (var i=0;i<gamepads.length;i++){
           if(gamepads[i]!==undefined )
            {
                // console.log("YO")
                var myGamePad = {buttons:{},axes:{},id:i};
                var o;

                for(var o=0;o < gamepads[i].buttons.length;o++) {
                    myGamePad.buttons[gamePadDictionnary.buttons[o]] = gamepads[i].buttons[o];        
                }
                for(var b=0;b < gamepads[i].axes.length;b++) {
                    if(gamepads[i].axes[b]>0.3 || gamepads[i].axes[b]<-0.3)
                        myGamePad.axes[gamePadDictionnary.axes[b]] = gamepads[i].axes[b];
                    else 
                        myGamePad.axes[gamePadDictionnary.axes[b]] = 0;
                }

                gamePadFrameBefore[i] = currentGamepad[i];
                key.gamepad(myGamePad);
            }
    }


}

var gamepadLoop = setInterval(testGamepad,1000/60)

};
*/
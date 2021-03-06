var CONST               = require('../const.js');

//Just do : CONST.keysStillDown[key], to get the value you want.
// Exemple : if(CONST.keysStillDown.left && CONST.keysStillDown.right)
//              console.log("It's working");
var keyCodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    8 : "backspace", //  backspace
    9 : "tab", //  tab
    13 : "enter", //  enter
    16 : "shift", //  shift
    17 : "ctrl", //  ctrl
    18 : "alt", //  alt
    19 : "pause/break", //  pause/break
    20 : "caps lock", //  caps lock
    27 : "escape", //  escape
    33 : "page up", // page up, to avoid displaying alternate character and confusing people             
    34 : "page down", // page down
    35 : "end", // end
    36 : "home", // home
    45 : "insert", // insert
    46 : "delete", // delete
    91 : "left window", // left window
    92 : "right window", // right window
    93 : "select key", // select key
    96 : "numpad 0", // numpad 0
    97 : "numpad 1", // numpad 1
    98 : "numpad 2", // numpad 2
    99 : "numpad 3", // numpad 3
    100 : "numpad 4", // numpad 4
    101 : "numpad 5", // numpad 5
    102 : "numpad 6", // numpad 6
    103 : "numpad 7", // numpad 7
    104 : "numpad 8", // numpad 8
    105 : "numpad 9", // numpad 9
    106 : "multiply", // multiply
    107 : "add", // add
    109 : "subtract", // subtract
    110 : "decimal point", // decimal point
    111 : "divide", // divide
    112 : "F1", // F1
    113 : "F2", // F2
    114 : "F3", // F3
    115 : "F4", // F4
    116 : "F5", // F5
    117 : "F6", // F6
    118 : "F7", // F7
    119 : "F8", // F8
    120 : "F9", // F9
    121 : "F10", // F10
    122 : "F11", // F11
    123 : "F12", // F12
    144 : "num lock", // num lock
    145 : "scroll lock", // scroll lock
    186 : ",", // semi-colon
    187 : "=", // equal-sign
    188 : ",", // comma
    189 : "-", // dash
    190 : ".", // period
    191 : "/", // forward slash
    192 : "`", // grave accent
    219 : "[", // open bracket
    220 : "\\", // back slash
    221 : "]", // close bracket
    222 : "'", // single quote
};

window.addEventListener("keydown", function(e) {
    CONST.keyboardManager.stringCode = keyCodes[e.keyCode] || String.fromCharCode(e.keyCode);
    if (!CONST.keysStillDown[CONST.keyboardManager.stringCode]) {
    }
    CONST.keysStillDown[CONST.keyboardManager.stringCode] = true;
    
}, false);

window.addEventListener("keyup", function(e) {
    CONST.keyboardManager.stringCode = keyCodes[e.keyCode] || String.fromCharCode(e.keyCode);
    delete CONST.keysStillDown[CONST.keyboardManager.stringCode];
}, false);

function intInputsValue()
{
    if(CONST.keysStillDown.left)
        CONST.direction.x = -1;
    if(CONST.keysStillDown.right)
        CONST.direction.x = 1;
    if(CONST.keysStillDown.up)
        CONST.direction.y = -1;
    if(CONST.keysStillDown.down)
        CONST.direction.y = 1;
}
module.exports = {
    "keysStillDown" : CONST.keysStillDown,
    "keyCodes"  : keyCodes,
    "intInputsValue" : intInputsValue
};
var CONST               = require('./const.js'),
    main                = require('./main.js');
    inputsManager       = require('./managers/inputsManager.js'),
    eventManager        = require('./managers/eventManager.js')
    keyboardManager     = require('./managers/keyboardManager.js'),
    Player              = require('./class/player.js');

//LIBS
require('./libs/jquery.js');

$(function() {
    function init()
    {
        CONST.canvas = document.getElementById('canvas');
        CONST.ctx    = CONST.canvas.getContext('2d');
        addGlobalEvent(CONST.canvas);
        eventManager(CONST.eventManager);
        CONST.Player = new Player({x : 10, y : 10, color : 'yellow'});
        main.gameloop();
    }

    function addGlobalEvent(element)
    {   
        element.addEventListener('mousedown', inputsManager.manager.eMouseDown, false)
        element.addEventListener('mousemove', inputsManager.manager.eMouseMove, false)
        element.addEventListener('mouseover', inputsManager.manager.eMouseOver, false)
        element.addEventListener('mouseup', inputsManager.manager.eMouseUp, false)
        element.addEventListener('mouseout', inputsManager.manager.eMouseOut, false)
        element.addEventListener('touchstart', inputsManager.manager.eTouchStart, false)
        element.addEventListener('touchmove', inputsManager.manager.eTouchMove, false)
        element.addEventListener('touchend', inputsManager.manager.eTouchEnd, false)
    }

    init();
});

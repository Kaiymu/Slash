var CONST = require('../const.js');
var globalManager = {

/***************************************************************************************************
***  DESCRIPTION => Mouse events
***************************************************************************************************/
    eMouseDown : function(e) {
        CONST.touched = true;
        CONST.beginTouch = e;
    },

    eMouseMove : function(e) {
        var totalOffsetX = 0,
            totalOffsetY = 0;
            
        CONST.mouse = e;
        var currentElement = e.target;
        var e = event || window.event;
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
        this.x = e.pageX;
        this.y = e.pageY;
        this.canvasX = this.x - totalOffsetX;
        this.canvasY = this.y - totalOffsetY;
    },

    eMouseOver : function(e) {
        CONST.mouse = e;
    },

    eMouseUp : function(e) {
        CONST.touched = false;
        CONST.beginTouch = e;
    },

    eMouseOut : function(e) {
        CONST.mouse = e;
    },

/***************************************************************************************************
***  DESCRIPTION => Touch events
***************************************************************************************************/

    eTouchStart : function(e){
        CONST.touched = true; 
    },

    eTouchMove : function(e){
        CONST.mouse = e;
    },

    eTouchEnd : function(e){
        CONST.touched = false;
    },

/***************************************************************************************************
***  DESCRIPTION => Game Pad events
***************************************************************************************************/
    gamePadAxis : function(axis){
        
    }
};

module.exports = {
    "manager" : globalManager,
};
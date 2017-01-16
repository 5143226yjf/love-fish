/**
 * Created by lethe on 17-1-16.
 */
var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var canWidth;
var canHeight;
var ane;
var bgPic= new Image();

document.body.onload = game;
function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}
function init() {
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');
    bgPic.src='./src/background.jpg';
    canWidth = can1.width;
    canHeight = can1.height;
    ane = new aneObj();
    ane.init();
}
function gameloop() {
    requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    ane.draw();
}
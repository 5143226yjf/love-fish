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
var fruit;

var mom;
var momTail = [];
var momEye = [];
var momBodyOrg = [];
var momBodyBlue = [];

var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];

var mx;
var my;

var data;

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
    ctx1 = can1.getContext('2d');   //获取绘制2D绘制上下文
    can2 = document.getElementById('canvas2');  //背景，海葵，食物
    ctx2 = can2.getContext('2d');
    bgPic.src='./src/background.jpg';
    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth *0.5;
    my = canHeight * 0.5;

    //鱼尾巴
    for(var i = 0;i < 8; i++){
        momTail[i] = new Image();
        momTail[i].src = "./src/bigTail" + i + ".png";
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i +".png";

        momBodyOrg[i] = new Image();
        momBodyOrg[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = "./src/bigSwimBlue" +i + ".png";
    }

    for(var j = 0; j < 2; j++){
        momEye[j] = new Image();
        momEye[j].src = "./src/bigEye" + j + ".png";

        babyEye[j] = new Image();
        babyEye[j].src = "./src/babyEye" + j +".png";
    }

    for(var k = 0; k < 20; k++){
        babyBody[k] = new Image();
        babyBody[k].src = "./src/babyFade" + k + ".png";
    }
    data = new dataObj();

    can1.addEventListener('mousemove',onMouseMove,false);

    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";
}
function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);  ///清空ctx1的像素
    mom.draw();
    baby.draw();
    data.draw();
    momFruitCollision();
    momBabyCollision();
}
//获取鼠标位置
function onMouseMove(e) {
    if(!data.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e. offsetY;
        }
    }
}
/**
 * Created by lethe on 17-1-17.
 */
//绘制食物
var fruitObj = function () {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
};
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
    for(var i = 0; i < this.num; i++){
        this.alive[i] =false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.fruitType[i] = "";
        this.spd[i] = Math.random() * 0.017 + 0.003;
        //this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
};
fruitObj.prototype.draw = function () {
    for(var i = 0; i< this.num; i++){
        if(this.alive[i]){
            if(this.fruitType[i] == "blue"){
                var pic = this.blue;
            }
            else {
                var pic = this.orange;
            }
            //控制海葵成长大小
            if(this.l[i]<14) {
                this.l[i] += this.spd[i] * deltaTime;
            }
            //控制海葵漂浮
            else{
                this.y[i] -= this.spd[i] * 5 * deltaTime;
            }
            ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i]-this.l[i] * 0.5, this.l[i],this.l[i]);
            if(this.y[i] < 10){
                this.alive[i] = false;
            }
        }
    }
};
fruitObj.prototype.update = function () {
    var num = 0;
    for(var j = 0; j < this.num; j++){
        if(this.alive[j])
            num++;
    }
};

fruitObj.prototype.born = function (i) {
    var aneId = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.headx[aneId];
    this.y[i] = ane.heady[aneId];
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if(ran < 0.3){
        this.fruitType[i] = "blue";
    }
    else{
        this.fruitType[i] = "orange";
    }
};
fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
};

function fruitMonitor() {
    var num = 0;
    for(var i = 0,fru = fruit.num; i < fru; i++){
        if(fruit.alive[i])
            num++;
    }
    if(num < 15){
        sendFruit();
        return;
    }
}
function sendFruit() {
    for(var i = 0,fru = fruit.num; i < fru; i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}

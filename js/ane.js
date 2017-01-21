/**
 * Created by lethe on 17-1-16.
 */
//定义一个海葵对象
var aneObj = function () {
    //this.x = [];
    //this.len = [];
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha = 0;
    this.amp = [];
};

//prototype向对象添加属性和方法
aneObj.prototype.num = 50;
//初始化
aneObj.prototype.init = function () {
    for(var i = 0; i<this.num; i++){
        this.rootx[i] = i * 16 + Math.random() * 20; //海葵的间距
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 +Math.random() * 50;
       // this.len[i] = 200 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
};

aneObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx2.save();  //保存当前变换
    ctx2.globalAlpha = 0.6;   //设置透明度
    ctx2.strokeStyle = "#3b154e";  //设置颜色
    ctx2.lineWidth = 20;  //外框线的宽度
    ctx2.lineCap = "round" ;   //渲染线段的末端为圆形
    for(var i = 0; i< this.num; i++){
        ctx2.beginPath();   //开始一条新路径
        ctx2.moveTo(this.rootx[i],canHeight);   //定义一条新路径
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i],canHeight - 150, this.headx[i], this.heady[i]);   //绘制一条线段
        ctx2.stroke();   //绘制图形
    }
    ctx2.restore();   //恢复初始的变换，与save一起，样式只在save与restore之间起作用
};
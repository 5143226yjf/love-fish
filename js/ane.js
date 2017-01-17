/**
 * Created by lethe on 17-1-16.
 */
//定义一个海葵对象
var aneObj = function () {
    this.x = [];
    this.len = [];

};

//prototype向对象添加属性和方法
aneObj.prototype.num = 50;
//初始化
aneObj.prototype.init = function () {
    for(var i = 0; i<this.num; i++){
        this.x[i] = i * 16 + Math.random() * 20; //海葵的间距
        this.len[i] = 200 + Math.random() * 50;
    }
};

aneObj.prototype.draw = function () {
    ctx2.save();  //保存当前变换
    for(var i = 0; i< this.num; i++){
        ctx2.beginPath();   //开始一条新路径
        ctx2.globalAlpha = 0.6;   //设置透明度
        ctx2.moveTo(this.x[i],canHeight);   //定义一条新路径
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);   //绘制一条线段
        ctx2.strokeStyle = "#3b154e";  //设置颜色
        ctx2.lineWidth = 20;  //外框线的宽度
        ctx2.lineCap = "round" ;   //渲染线段的末端为圆形
        ctx2.stroke();   //绘制图形
    }
    ctx2.restore();   //恢复初始的变换，与save一起，样式只在save与restore之间起作用
};
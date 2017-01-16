/**
 * Created by lethe on 17-1-16.
 */
var aneObj = function () {
    this.x = [];
    this.len = [];

};
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    for(var i = 0; i<this.num; i++){
        this.x[i] = i * 16 + Math.random() * 20; //海葵的间距
        this.len[i] = 200 + Math.random() * 50;
    }
};
aneObj.prototype.draw = function () {
    ctx2.save();
    for(var i = 0; i< this.num; i++){
        ctx2.beginPath();
        ctx2.globalAlpha = 0.6;
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);
        ctx2.strokeStyle = "33b154e";
        ctx2.lineWidth = 20;
        ctx2.lineCap = "round";
        ctx2.stroke();
    }
    ctx2.restore();   //样式只在save与restore之间起作用
};
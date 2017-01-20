/**
 * Created by lethe on 17-1-18.
 */
//绘制大鱼
var momObj = function () {
    this.x;
    this.y;
    this.angle;
    this.bigBody = new Image();

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.bigEyeTimer = 0;
    this.bigEyeCount = 0;
};
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigBody.src = './src/bigSwim0.png';
};
momObj.prototype.draw = function () {
    this.x = lerpDistance(mx,this.x,0.98);
    this.y = lerpDistance(my,this.y,0.98);
    var deltaX = mx - this.x;
    var deltaY = my - this.y;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.6);

    //鱼尾摆动计数
    this.bigTailTimer += deltaTime;
    if(this.bigTailTimer > 50){
        this.bigTailCount = (this.bigTailCount + 1) % 8;
        this.bigTailTimer %= 50;
    }
    //大鱼眼睛随机时间眨眼
    this.bigEyeTimer = Math.floor(Math.random() * 30);
    if(this.bigEyeTimer < 3){
        this.bigEyeCount = 0;
        setTimeout(()=>{
            this.bigEyeCount = 1;
        },500);
        this.bigEyeCount = 0;
    }

    ctx1.save();
    //大鱼随着鼠标移动
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var bigTailCount = this.bigTailCount;
    var bigEyeCount = this.bigEyeCount;
    ctx1.drawImage(momTail[bigTailCount],-momTail[bigTailCount].width*0.5 + 30,-momTail[bigTailCount].height*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(momEye[bigEyeCount],-momEye[bigEyeCount].width*0.5,-momEye[bigEyeCount].height*0.5);
    ctx1.restore();
};
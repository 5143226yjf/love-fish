/**
 * Created by lethe on 17-1-20.
 */
var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    this.babyBody = new Image();

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;

};
babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    this.babyBody.src = './src/babyFade0.png';
};
babyObj.prototype.draw = function () {
    //跟随大鱼移动
    this.x = lerpDistance(mom.x,this.x,0.98);
    this.y = lerpDistance(mom.y,this.y,0.98);

    //控制移动角度，跟着大鱼中心
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;

    this.angle = lerpAngle(beta,this.angle,0.6);

    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer > 50){
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }

    this.babyEyeTimer = Math.floor(Math.random() * 30);
    if(this.babyEyeTimer < 3){
        this.babyEyeCount = 0;
        setTimeout(()=>{
            this.babyEyeCount = 1;
        },500);
        this.babyEyeCount = 0;
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var babyTailCount = this.babyTailCount;
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyTail[babyTailCount], - babyTail[babyTailCount].width * 0.5 + 23, - babyTail[babyTailCount].height * 0.5);
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
    ctx1.restore();
};
/**
 * Created by lethe on 17-1-20.
 */
//大鱼吃果实
function momFruitCollision() {
    if(!data.gameOver){
        for(var i = 0,fru = fruit.num; i < fru; i++) {
            if (fruit.alive[i]) {
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (l < 900) {
                    var x = fruit.x[i];
                    var y = fruit.y[i];
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.bigBodyCount++;
                    if (mom.bigBodyCount > 7) {
                        mom.bigBodyCount = 7;
                    }
                    if (fruit.fruitType[i] == "blue") {
                        data.double = 2;
                    }
                    ctx2.save();
                    ctx2.beginPath();
                    ctx2.strokeStyle = "blue";
                    ctx2.arc(x, y, 80, 0, 2 * Math.PI, false);
                    ctx2.stroke();
                    ctx2.restore();
                }

            }
        }
    }
}

//大鱼小鱼的距离
function momBabyCollision() {
    if(data.fruitNum > 0 && !data.gameOver){
        var l = calLength2(mom.x, mom.y, baby.x, baby.y);
        if(l < 900){
            baby.babyBodyCount = 0;
            mom.bigBodyCount = 0;
            data.addScore();
        }
    }
}
var pos = [], //位置
    count = 0,
    results = 0;
var canvans = document.querySelector("#gobang");
var context = canvans.getContext("2d");
window.onload = function () {
    drawCheekBoard();
};
// 画棋盘
var drawCheekBoard = function () {
    context.strokeStyle = '#000';
    for(var i=0;i<15;i++){
        context.beginPath();
        context.moveTo(15+30*i,15);
        context.lineTo(15+30*i,435);
        context.stroke();
        context.beginPath();
        context.moveTo(15,15+30*i);
        context.lineTo(435,15+30*i);
        context.stroke();
    }
};
for (var m = 0;m < 15;m++){
    pos[m] = [];
    for (var n = 0;n < 15;n++){
        pos[m][n] = 0;
    }
}
// 下棋
canvans.onclick = function (e) {
    var i = Math.floor(e.offsetX / 30);
    var j = Math.floor(e.offsetY / 30);
    if (pos[j][i] !== "black"&&pos[j][i] !== "white"){
        drawCheek(i,j);
    }
};
var drawCheek = function (i,j) {
    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);
    context.beginPath();
    context.arc(15+30*i,15+30*j,12,0,Math.PI*2);
    if(count%2 === 0){
        pos[j][i] = 10;
        gradient.addColorStop(0,'#0a0a0a');
        gradient.addColorStop(1,'#636766');
        count++;
    }else{
        pos[j][i] = 100;
        gradient.addColorStop(0,'#d1d1d1');
        gradient.addColorStop(1,'#f9f9f9');
        count++;
    }
    context.fillStyle = gradient;
    context.fill();
    checkWins();
};
// 全局胜负判定
var  checkWins = function () {
    // 横线赢法
    for(var i = 0; i < 15; i++){
        for(var j = 0; j < 11; j++){
            for(var k = 0; k < 5; k++){
                if (pos[i][j+k]!==0){
                    results+=pos[i][j+k];
                }
            }
            if (results == 50){
                alert("黑棋获胜");
                window.location.reload();
            }
            else if (results == 500){
                alert("白棋获胜");
                window.location.reload();
            }
            else {
                results = 0;
            }
        }
    }
    // 竖线赢法
    for(var i = 0; i < 11; i++){
        for(var j = 0; j < 15; j++){
            for(var k = 0; k < 5; k++){
                if (pos[i+k][j]!==0){
                    results+=pos[i+k][j];
                }
            }
            if (results == 50){
                alert("黑棋获胜");
                window.location.reload();
            }
            else if (results == 500){
                alert("白棋获胜");
                window.location.reload();
            }
            else {
                results = 0;
            }
        }
    }
    // 正斜线赢法
    for(var i = 0; i < 11; i++){
        for(var j = 0; j < 11; j++){
            for(var k = 0; k < 5; k++){
                if (pos[i+k][j+k]!==0){
                    results+=pos[i+k][j+k];
                }
            }
            if (results == 50){
                alert("黑棋获胜");
                window.location.reload();
            }
            else if (results == 500){
                alert("白棋获胜");
                window.location.reload();
            }
            else {
                results = 0;
            }
        }
    }
    // 反斜线赢法
    for(var i = 0; i < 11; i++){
        for(var j = 14; j > 3; j--){
            for(var k = 0; k < 5; k++){
                if (pos[i+k][j-k]!==0){
                    results+=pos[i+k][j-k];
                }
            }
            if (results == 50){
                alert("黑棋获胜");
                window.location.reload();
            }
            else if (results == 500){
                alert("白棋获胜");
                window.location.reload();
            }
            else {
                results = 0;
            }
        }
    }
};
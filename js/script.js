var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let url = '../image/fazboiTitle.jpg';
let img = new Image();
img.src = url;
img.onload = function () {
    ctx.drawImage(img, 0, 0);
}
// const image = document.getElementById('title');
// ctx.drawImage(img, 0, 0);

var text = 'Five Nights at Fazbois ';
ctx.font = '30px Courier New';

ctx.fillStyle = "#ffffff"
ctx.fillText(text,10,35);

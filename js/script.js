function imageLoaded(image) {
    return new Promise(
        function (resolve, reject) {
            image.addEventListener("load", function() { resolve(image) });
        }
    );
}

async function getImage(url) {
    var image = new Image();
    image.src = url;
    await imageLoaded(image);
    return image;
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let image = getImage("images/fazboiTitle.jpg");
ctx.drawImage(image, 0, 0);

// const image = document.getElementById('title');
// ctx.drawImage(img, 0, 0);

var text = 'Five Nights at Fazbois ';
ctx.font = '30px Courier New';

ctx.fillStyle = "#ffffff"
ctx.fillText(text,10,35);

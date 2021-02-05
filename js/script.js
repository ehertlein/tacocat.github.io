function drawTitle() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    const image = document.getElementById('title');
    ctx.drawImage(image, 0, 0);
    
    var text = 'Five Nights at Fazbois ';
    ctx.font = '30px Courier New';
    
    ctx.fillStyle = "#ffffff"
    ctx.fillText(text,10,35);
}

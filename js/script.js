function drawTitle() {
    var playButton = document.getElementById('playButton');
    playButton.style.display = 'none';
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    const image = document.getElementById('title');
    ctx.drawImage(image, 260, 10);
    
    var text = 'Five Nights at Fazbois ';
    ctx.font = '30px Courier New';
    
    ctx.fillStyle = "#ffffff"
    ctx.fillText(text,10,35);

    text = 'What the HECK is a © ';
ctx.font = '15px Courier New';
ctx.fillStyle = "#ffffff"
ctx.fillText(text, 565, 425);

    var titleSong = new Audio('audio/title.mp3')
    titleSong.play();
}

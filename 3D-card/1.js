document.addEventListener("DOMContentLoaded", function(){

    var card = document.getElementsByClassName('card')[0];

    var maxX = 20;
    var maxY = 20;

    function interact(){
        let X = event.offsetX / this.offsetWidth;
        let Y = event.offsetY / this.offsetHeight;
        let x = (X>=0.5) ? -1*X*maxY : (1-X)*maxY;
        let y = (Y>=0.5) ? Y*maxX : -1*(1-Y)*maxX;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }

    card.addEventListener('mousemove', interact);
})
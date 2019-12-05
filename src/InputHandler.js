class InputHandler{
    constructor(ball, alert){
        document.addEventListener("keydown", function(event){
            //console.log(event.keyCode);
            if(event.keyCode==38){
                //console.log(event.keyCode);
                ball.moveTop();
            }else if(event.keyCode==40){
                //console.log(event.keyCode);
                ball.moveDown();
            }else if(event.keyCode==13 && alert.style.display=="block"){
                //console.log(event.keyCode);
                reload();
            }
        })
    }
}
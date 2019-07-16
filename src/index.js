
function main(){
   
    var c = document.getElementById("mcanvas");
    var score = document.getElementById("score");
    // document.body.setAttribute( "style", "-webkit-transform: rotate(-90deg);");
    

    var ctx = c.getContext("2d");
    const GAME_HEIGHT = 600;
    const GAME_WIDTH = 1000 ;

    // //var uName = prompt("Please Enter Your Name");
    // var nameTag = document.getElementById("uname");
    // nameTag.innerHTML= uName+", Your ";

    var position_counter = 0;
    var gameSpeed = 5;

    var optics_top = new Opts(250,GAME_HEIGHT,GAME_WIDTH,1 , gameSpeed);
    var optics_bottom = new Opts(250,GAME_HEIGHT,GAME_WIDTH,2, gameSpeed);
    
    //var score = document.getElementById("score");

    var interval = 1000;

    var name = new MName();
    
    
    
    var m_ball = new Ball(GAME_HEIGHT, GAME_WIDTH, gameSpeed);
    m_ball.draw(ctx);
    var a = new InputHandler(m_ball);

    setInterval(function(){
        position_counter = position_counter+1;
    },interval);

    var i = 0;
    function gameLoop(){
        
        if((m_ball.getPosY()+40 >= optics_bottom.getPosY() && m_ball.getPosX()+40 >= optics_bottom.getPosX() && m_ball.getPosX()+40 <= optics_bottom.getPosX()+130) ){
            
            //  console.log(">>>> : "+(optics_bottom.getPosX()-m_ball.getPosX()));
            if(optics_bottom.getPosX()-m_ball.getPosX()<=40 || optics_bottom.getPosY()-m_ball.getPosY()<=40 ){
                console.log("Alert : 1");
                alert("Your score is "+position_counter);
                window.location.reload();
            }
        } else if(m_ball.getPosY()-40 <= optics_top.getRectHeight() && m_ball.getPosX()+40 >= optics_top.getPosX() && m_ball.getPosX()+40 <= optics_top.getPosX()+130 ){
            console.log("Alert : 2");
            alert("Your score is "+position_counter);
            window.location.reload();
        }else{


            ///speed

        if(position_counter==5){
            gameSpeed = 6;
        }else if(position_counter==10){
            gameSpeed = 8;
        }else if(position_counter==15){
            gameSpeed = 10;
        }else if(position_counter==20){
            gameSpeed = 12;
        }else if(position_counter==25){
            gameSpeed = 14;
        }else if(position_counter==30){
            gameSpeed = 16;
        }else if(position_counter==35){
            gameSpeed = 18;
        }else if(position_counter==40){
            gameSpeed = 20;
        }else if(position_counter==45){
            gameSpeed = 22;
        }else if(position_counter==55){
            gameSpeed = 26;
        }else if(position_counter==60){
            gameSpeed = 28;
        }


        
        

        //score
        score.innerHTML = position_counter;


        ctx.clearRect(0,0,1000,600);
        m_ball.update(gameSpeed);
        m_ball.draw(ctx);

        if(optics_bottom.getPosX() <= 500 || optics_top.getPosX() <= 500)
        {
            i=i+1;
            //console.log("run "+i);
            optics_bottom.updateOpt(gameSpeed);
            optics_bottom.draw(ctx);

            optics_top.updateOpt(gameSpeed);
            optics_top.draw(ctx);
        }else{
            optics_bottom.updateOpt(gameSpeed);
            optics_bottom.draw(ctx);
        }

        

        name.draw(ctx);
        requestAnimationFrame(gameLoop);
        }

        
    }
    gameLoop();
}



///balll classs
class Ball{
    constructor(gamehieght, gamewidth, gameSpeed){
        this.position_x = 100;
        this.position_y = gamehieght-40;
        this.gamehieght = gamehieght;
        this.gamewidth = gamewidth
        this.speed = 0;
        this.max_speed = gameSpeed;
    }

    draw(ctx){
        
        ctx.fillStyle="#f00";
        ctx.beginPath();
        ctx.arc(this.position_x, this.position_y, 40, 0, 2 * Math.PI);
        ctx.fill();
    }

    moveTop(){
        this.speed = this.max_speed;
    }

    moveDown(){
        this.speed = -this.max_speed;
    }

    update(gameSpeed){
        //console.log("Updated :"+ this.position_y +" || Speed :"+this.speed);
        if(this.max_speed != gameSpeed){
            this.max_speed = gameSpeed;
            //this.speed = -this.max_speed;
        }
        
        

        if(this.position_y<=(this.gamehieght-40) && this.position_y>=35)
        {
            this.position_y = this.position_y-this.speed;
            if(this.position_y>this.gamehieght-40){
                this.position_y= this.position_y - this.max_speed;
            }
            if(this.position_y<=40){
                this.position_y= this.position_y + this.max_speed;
            }
        }
        
    }

    getPosX(){
        return this.position_x;
    }

    getPosY(){
        return this.position_y;
    }
}

////opticals

class Opts{
    constructor(rect_hieght, gamehieght, gamewidth, position, gameSpeed){
        this.height = rect_hieght;
        this.position = position;
        this.width = 50;
        this.gamehieght = gamehieght;
        this.gamewidth = gamewidth;
        this.position_x = gamewidth;
        this.maxSpeed = gameSpeed;
        this.speed = 0;
        this.ranCol = 910083;
        if(position%2 ==0){
            this.position_y = gamehieght - rect_hieght;
        }else{
            this.position_y = 0;
        }

    }

    draw(ctx){

        ctx.fillStyle= "#"+this.ranCol;
        
        ctx.fillRect(this.position_x, this.position_y, this.width, this.height);
       
    }
    
    moveOpt(){
        this.speed = this.maxSpeed;
    }

    updateOpt(gameSpeed){

        if(this.position_x<=-50){
            var ran = Math.floor(Math.random() * (400 - 80) + 80);
            //this.ranCol = Math.floor(Math.random() * (999999 - 111111) + 111111);
            console.log(ran);
            this.height = ran;

            if(this.position%2 ==0){
                this.position_y = this.gamehieght - this.height;
            }else{
                this.position_y = 0;
            }
        }

        if(this.maxSpeed != gameSpeed){
            this.maxSpeed = gameSpeed;
            this.speed = -this.maxSpeed;
        }

        if(this.position_x>(-50)){
            this.position_x = this.position_x - this.maxSpeed;
        }else{
            this.position_x = this.gamewidth;
        }
        
    }
    
    getPosX(){
        return this.position_x;
    }

    getPosY(){
        return this.position_y;
    }

    getRectHeight(){
        return this.height;
    }


}

//input handler

class InputHandler{
    constructor(ball){
        document.addEventListener("keydown", function(event){
            //console.log(event.keyCode);
            if(event.keyCode==38){
                //console.log(event.keyCode);
                ball.moveTop();
            }else if(event.keyCode==40){
                //console.log(event.keyCode);
                ball.moveDown();
            }
        })
    }
}


///Name
class MName{
    constructor(){
        
    }

    draw(ctx){
        ctx.font = "40px Open Sans";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("H4R5", 1400/2, 600/2); 
    }
}

///main
main()
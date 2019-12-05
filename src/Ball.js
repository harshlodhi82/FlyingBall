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
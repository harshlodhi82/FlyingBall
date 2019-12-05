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
            //this.arcpos_y = gamehieght - rect_hieght;
        }else{
            this.position_y = 0;
            //this.arcpos_y = gamehieght - rect_hieght;
        }

    }

    draw(ctx){

        ctx.fillStyle= "#"+this.ranCol;

        //ctx.beginPath();
        //ctx.arc(this.position_x+25, this.arcpos_y, 40, 0, 2 * Math.PI);
        //ctx.fill();
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
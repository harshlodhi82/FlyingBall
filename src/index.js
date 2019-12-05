
function main() {

    var c = document.getElementById("mcanvas");
    var score = document.getElementById("score");

    var alert_score = document.getElementById("mscore");

    var malert = document.getElementById("alert");

    //res_btn.onclick = window.location.reload();
    

    var ctx = c.getContext("2d");
    const GAME_HEIGHT = 600;
    const GAME_WIDTH = 1000;

    var position_counter = 0;
    var gameSpeed = 5;

    var optics_top = new Opts(250, GAME_HEIGHT, GAME_WIDTH, 1, gameSpeed);
    var optics_bottom = new Opts(250, GAME_HEIGHT, GAME_WIDTH, 2, gameSpeed);

    var interval = 1000;

    var name = new MName();
    //malert.style.display = "block";



    var m_ball = new Ball(GAME_HEIGHT, GAME_WIDTH, gameSpeed);
    m_ball.draw(ctx);
    var a = new InputHandler(m_ball,malert);

    setInterval(function () {
        position_counter = position_counter + 1;
    }, interval);

    var i = 0;
    function gameLoop() {

        if ((m_ball.getPosY() + 40 >= optics_bottom.getPosY() && m_ball.getPosX() + 40 >= optics_bottom.getPosX() && m_ball.getPosX() + 40 <= optics_bottom.getPosX() + 130)) {

            if (optics_bottom.getPosX() - m_ball.getPosX() <= 40 || optics_bottom.getPosY() - m_ball.getPosY() <= 40) {
                console.log("Alert : 1");
                alert_score.innerHTML = position_counter;
                //alert("Your score is " + position_counter);
                //window.location.reload();
                malert.style.display = "block";
            }
        } else if (m_ball.getPosY() - 40 <= optics_top.getRectHeight() && m_ball.getPosX() + 40 >= optics_top.getPosX() && m_ball.getPosX() + 40 <= optics_top.getPosX() + 130) {
            console.log("Alert : 2");
            alert_score.innerHTML = position_counter;
            //alert("Your score is " + position_counter);
            //window.location.reload();
            malert.style.display = "block";
        } else {


            ///speed

            if (position_counter == 5) {
                gameSpeed = 6;
            } else if (position_counter == 10) {
                gameSpeed = 8;
            } else if (position_counter == 15) {
                gameSpeed = 10;
            } else if (position_counter == 20) {
                gameSpeed = 12;
            } else if (position_counter == 25) {
                gameSpeed = 14;
            } else if (position_counter == 30) {
                gameSpeed = 16;
            } else if (position_counter == 35) {
                gameSpeed = 18;
            } else if (position_counter == 40) {
                gameSpeed = 20;
            } else if (position_counter == 45) {
                gameSpeed = 22;
            } else if (position_counter == 55) {
                gameSpeed = 26;
            } else if (position_counter == 60) {
                gameSpeed = 28;
            }


            //score
            score.innerHTML = position_counter;


            ctx.clearRect(0, 0, 1000, 600);
            m_ball.update(gameSpeed);
            m_ball.draw(ctx);

            if (optics_bottom.getPosX() <= 500 || optics_top.getPosX() <= 500) {
                i = i + 1;
                optics_bottom.updateOpt(gameSpeed);
                optics_bottom.draw(ctx);

                optics_top.updateOpt(gameSpeed);
                optics_top.draw(ctx);
            } else {
                optics_bottom.updateOpt(gameSpeed);
                optics_bottom.draw(ctx);
            }



            name.draw(ctx);
            requestAnimationFrame(gameLoop);
        }


    }
    gameLoop();
}
///main
main()
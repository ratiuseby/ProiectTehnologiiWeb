import java.util.*;
import greenfoot.*;

public class MyWorld extends World
{
    Scoreboard myScoreBoard = new Scoreboard("Computer Score: ");
    Ball ball = new Ball();
    
    public MyWorld()
    {
        super(600, 800, 1);
        
        prepare();        
    }
    
    public void prepare(){        
        addObject(ball, 300, 400);
        
        addObject(myScoreBoard, 200, 200);
        
        Human human = new Human();
        addObject(human, 300, 775);
        ComputerPaddle computerPaddle = new ComputerPaddle();
        addObject(computerPaddle, 300, 25);
    }
    
    public void act(){
        myScoreBoard.update("Computer Score : " + ball.whatScoreComputer());
    }
}

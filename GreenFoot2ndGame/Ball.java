import java.util.*;
import greenfoot.*;
/**
 * Write a description of class Ball here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ball extends SmoothMover
{
    public double xSpeed = 3;
    public double ySpeed = 3;
    
    public static int ballX, ballY;
    
    public int computerScore = 0;
    public int humanScore = 0;
    
    public int random = 0;
    
    public void act(){
        setLocation(getX() + xSpeed, getY() + ySpeed);
        
        ballX = getX();
        ballY = getY();
        
        bounceOffWalls();
        bounceOffPaddles();
        reset();
    }
    
     public void bounceOffWalls()
    {
        int worldWidth = getWorld().getWidth();      
        int spriteWidth2 = getImage().getWidth()/2;
        
        if(getX() > worldWidth - spriteWidth2)
            xSpeed = xSpeed * -1;
        
        if(getX() < 1)
            xSpeed = xSpeed * -1;
    }
    
    public void bounceOffPaddles(){
        Actor paddles = getOneIntersectingObject(Paddles.class);
        
        if(paddles != null){
            ySpeed = ySpeed * -1.1;
        }
    }

    public void reset(){
        int ballStartX = getWorld().getWidth()/2;
        int ballStartY = getWorld().getHeight()/2;
        
        if(getY() >= getWorld().getHeight() -1){
            setLocation(ballStartX, ballStartY);
            computerScore = computerScore + 1;
            pickAngle();
        }
        
        if(getY() <= 1){
            setLocation(ballStartX, ballStartY);
            humanScore = humanScore + 1;
            pickAngle();
        }
    }
    
    public void pickAngle(){
        random = Greenfoot.getRandomNumber(4);
        
        if(random == 0){
            xSpeed = 3;
            ySpeed = 3;
        } else{
            xSpeed = 3;
            ySpeed = -3;
        }
    }
    
    public int whatScoreComputer(){
        return computerScore;
    }
    
    public int whatScoreHuman(){
        return humanScore;
    }
}

import java.util.*;
import greenfoot.*;

/**
 * Write a description of class Paddles here.
 */
public class Paddles extends Actor
{
    /* Instance variables - replace the example below with your own*/
    public int speed = 7;
    
    public void keyboardControl(){
        if(Greenfoot.isKeyDown("right"))
        setLocation(getX() + speed, getY());
        if(Greenfoot.isKeyDown("left"))
        setLocation(getX() - speed, getY());
    }
    
    public void keepMeOnTheScreen()
    {
        int worldWidth = getWorld().getWidth();
        
        int spriteWidth2 = getImage().getWidth()/2;
        
        if(getX() > worldWidth - spriteWidth2)
        setLocation(worldWidth - spriteWidth2, getY());
    }
    
    public void playBack(){
        if(getX() > Ball.ballX)
        setLocation(getX() - speed, getY());
        if(getX() < Ball.ballX)
        setLocation(getX() + speed, getY());
    }
}

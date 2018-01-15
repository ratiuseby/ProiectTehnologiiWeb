import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Pod here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Pod extends Actor
{
    /**
     * Act - do whatever the Pod wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        //If left key is pressed, the pod goes left
        if(Greenfoot.isKeyDown("left"))
            setLocation( getX() - 15, getY());
        
        //If right key is pressed, the pod goes right
        if(Greenfoot.isKeyDown("right"))
            setLocation( getX() + 15, getY());
        
    }    
}

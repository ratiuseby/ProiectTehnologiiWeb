import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
/**
 * Write a description of class Ball here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ball extends Actor
{
    /**
     * Act - do whatever the Ball wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
  
    int X = 0;
    int Y = -1;
    int ballSpeed = 7;
    int currentAngle = 270/*degrees*/;
    
    
    public void act() 
    {
        // Moving the ball
        setLocation(getX() + X, getY() + Y * ballSpeed);
        
        // Hitting a wall changes it's direction
        if(getY() == 0) {
            Y = -Y;
        }
        if(getX() == 0 || getX() == getWorld().getWidth() - 1) {
            X = -X;
        }
        
        // If the ball falls off, the game stops
        if(getY() > getWorld().getHeight() - 30) {
            GameOver gameOver = new GameOver();
            
            getWorld().addObject(gameOver, getWorld().getWidth() / 2, getWorld().getHeight() / 2);
            
            Greenfoot.stop();
        }
        
        //If the ball touches the pod, it bounces off
        Pod pod = (Pod)getOneIntersectingObject(Pod.class);
        if(pod != null) {
            if(pod.getX() > getX())
                X = - Math.abs((pod.getX() - getX()) % 10);
                else if(pod.getX() < getX())
                    X = Math.abs((pod.getX() - getX()) % 10);
                else if(pod.getX() < getX())
                    X = 0;
            Y = -Y;
        }
        
        //If the ball touches a brick, it bounces off destroying the brick
        Brick brick = (Brick)getOneIntersectingObject(Brick.class);
        if(brick != null) {
            if(brick.getX() > getX())
                X = - Math.abs((brick.getX() - getX()) % 10);
                else if(brick.getX() < getX())
                    X = Math.abs((brick.getX() - getX()) % 10);
                else if(brick.getX() < getX())
                    X = 0;
           
            Y = -Y;
            
            getWorld().removeObject(brick);
            
            if(getWorld().getObjects(Brick.class).isEmpty()) {
                Win win = new Win();
                GifImage gifImage = new GifImage("You Won.gif");
                win.setImage(gifImage.getCurrentImage());
                
                getWorld().addObject(win, getWorld().getWidth() / 2, getWorld().getHeight() / 2);
                
                X = 0;
                Y = 0;
                Greenfoot.playSound("You_Won.wav");
            }
        }
    }
}

import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.*;
/**
 * Write a description of class BrickBreakerWorld here.
 * 
 * @Sebastian
 * @1.0
 */
public class BrickBreakerWorld extends World
{

    /**
     * Constructor for objects of class BrickBreakerWorld.
     * 
     */
    public BrickBreakerWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(800, 600, 1); 

        // Create a new Jump Pod Object
        Pod jumpPod = new Pod();

        // Add the jumpPod to our world
        addObject(jumpPod, 400, 550);

        // Create a new Jump Pod Object
        Ball ball = new Ball();

        // Add the jumpPod to our world
        addObject(ball, 400, 498);

        // Create new Brick Objects
        ArrayList<Brick> bricks = new ArrayList<Brick>();
        for(int i = 0;i < 9; i++) {
            bricks.add(new Brick());
        }

        // Add the bricks to our world
        for(int i = 0;i < 9; i++) {
            if(i < 5)
                addObject(bricks.get(i), 200 + i*100, 100); 
            else
                addObject(bricks.get(i), 150 + (9-i)*100, 200); 
        }

        prepare();
    }

    /**
     * Prepare the world for the start of the program.
     * That is: create the initial objects and add them to the world.
     */
    private void prepare()
    {
    }
}

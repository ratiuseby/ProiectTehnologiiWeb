import java.util.*;
import greenfoot.*;

/**
 * Write a description of class Human here.
 */
public class Human extends Paddles
{
    /* Instance variables - replace the example below with your own*/
    private int x;

    public void act(){
        keyboardControl();
        keepMeOnTheScreen();
    }
}

import greenfoot.*;
/**
 * Write a description of class Scoreboard here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Scoreboard  extends Actor
{
    // instance variables - replace the example below with your own
    private int x;

    public Scoreboard(String text)
    {
        GreenfootImage myScoreBoard = new GreenfootImage(text.length() * 20, 30);
        myScoreBoard.setColor(Color.RED);
        myScoreBoard.drawString(text, 2, 20);
        setImage(myScoreBoard);
    }    
    
    public void update(String text){
        GreenfootImage myScoreBoard = getImage();
        myScoreBoard.clear();
        myScoreBoard.drawString(text, 2, 20);
    }
}

# HTML, CSS and JavaScript - Coursera Course
###### by **The Hong Kong University of Science and Technology**
## Assignment for Module #2: Color Guessing Game (Week 2)

### **Instructions**

#### **The Task**

This assessment task requires you to make a simple color guessing game.

When the web page is loaded, the player sees a message like this.

![Initial Prompt Message](Screenshots/InitialPromptMessage.png?raw=true "Initial Prompt Message")

As you can see, the objective of the game is for the player to guess the color which your program is thinking of. The player needs to enter their guess, such as **cyan**.

A response from the browser will then be shown.

* If the color entered by the player is not in the array of colors used by the game, an appropriate message like this is shown:

![Color Not Recognized Message](Screenshots/colorNotRecognizedMessage.png?raw=true "Color Not Recognized Message")

* If the color entered by the player is in the list of colors used by the game but the color entered by the player is alphabetically higher than the answer, an appropriate message like this is shown:

![Color Alphabetically Higher Message](Screenshots/ColorAlphabeticallyHigherMessage.png?raw=true "Color Alphabetically Higher Message")

* If the color entered by the player is in the list of colors used by the game but the color entered by the player is alphabetically lower than the answer, an appropriate message like this is shown:

![Color Alphabetically Lower Message](Screenshots/ColorAlphabeticallyLowerMessage.png?raw=true "Color Alphabetically Lower Message")

* If the color entered by the player is correct the web page background is changed to that color and an appropriate message is shown:

![Congratulations Message](Screenshots/CongratulationsMessage.png?raw=true "Congratulations Message")

* This is what a web page looks like when the message is shown on top of a web page where the background has been changed to orange.

![Background Changed](Screenshots/BackgroundChanged.png?raw=true "Background Changed")

#### **A Flowchart**

Here is a flowchart for the game, showing the basic behavior.

![Flowchart](Screenshots/Flowchart.png?raw=true "Flowchart")

#### **A Note on Alphabetic Order**

In the game we use alphabetical order to provide hints to the player. Here are some examples of two strings where the first string is alphabetically higher than the second string. 

* sat > sad
* bags > bag
* thin > fat 
* good > bad

Here are some examples of two strings where the first string is alphabetically lower than the second string. 

* rag < rat
* bit < bite 
* food < water
* potato < potatoes  

In JavaScript you can easily determine whether one string is alphabetically higher or lower than another string e.g.

```
var string1="hat";
var string2="hit";
if (string1 > string2) 
    alert("string1 is alphabetically higher");
else if (string1 < string2) 
    alert("string1 is alphabetically lower");
```
#### **Technical Overview**

This assessment task requires an array of colors e.g. 
 
```
colors=["aqua", "black", "cyan", . . . ];
```
The names must be HTML color names. This is so that when the player successfully guesses the color it can be used for the web page background color, to show what the color actually looks like.

You can find a list of HTML color names at http://www.w3schools.com/html/html_colornames.asp and other places on the web. 

In your array the colors do not have to be listed in alphabetical order. However, in terms of playing the game, when the list of colors is shown to the player it would be more helpful if they are in alphabetical order. If you wish, you can easily use JavaScript to sort them.

One way to set the background color of a web page is 

```
myBody=document.getElementsByTagName("body")[0];
myBody.style.background=name_of_color;
```
#### **JavaScript Content**

1. Declaration of global variables and array e.g. color[].
   Setting the initial values.

2. The main game function - do_game()

    2.1. Generate a random number in the range 
         [0, length of array-1]

    2.2. Assign target to the random color in the array

    2.3. A while loop, which repeats until `finished` is true:
        - ask the player for their guess using prompt()
        - increase a variable count by 1
        - check the player’s guess using check_guess()
        
3. Check the input - check_guess()
   Check whether the player's guess is: 

    3.1. not a color in the array:
         show an appropriate message and return false
    3.2. alphabetically higher than the target:
            show an appropriate message and return false
    3.3. alphabetically lower than the target:
            show an appropriate message and return false
    3.4. correct:
            change the background color to the target, 
            show an appropriate message 
            which includes the total number of guesses 
            stored in variable count,
            return true

#### Updated: 2016-07-09

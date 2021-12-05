
# Random Password Generator

I buid this project for Generating random password. Where user can customize the password characters and length of the password. While building this project I learned about String.fromCharCode() method in JavaScript that can be used to convert a number to its associated ASCII Value. I also learned How to use Math.random() method to generate random values in a certain range.



## Demo

<img src="./Demo GIF/passGeneratorAlert.gif" alt="Alert GIF" width="450" height="320">&nbsp;<img src="./Demo GIF/passGenerator.gif" alt="Generate GIF" width="450" height="320">


  
## Tech Stack
- HTML
- CSS
- Bootstrap
- JavaScript

  
## Development Phases

-------**Bootstrap** Phase-1-------
1. Create a container.
2. Input box to show the generated password
2. Label and inputbox for password length.
3. Label for (UPPERCASE) and checkbox.

##
-------**Javascript** (logic) Phase-1 upperCase letter-------

1. Input password length from user.


2. **If** length <= 0 or no checkBox checked 
    - Display Alert Message
    - And Stop further function execution.
    **Else**
    Execute the function.
    
    ##

-------**Bootstrap** Phase-2-------

1. Create a new row.
2. And 2 columns one for the label and another for the checkbox.

##
-------**Javascript** (logic) Implementation------

1. Created a funtion randomNumberGenerator() to generate from min to max range Random numbers.  
2. Run a loop til password length.
3. Now using String.charFromCode() to convert the numbers to their respective ASCII value **e.g** 65 == A.
4. Use randomNumberGenerator() to generate the number associated with the ASCII value to generate.

##

-------**Bootstrap** Phase-3--------

Repeated the phase-2 steps.
##

---------**Javascript** (logic) phase-3 Final-------

1. Now to Select the random checked characters and include them to password again use randomNumberGenerator() to select between upperCase, lowerCase,Number and Special characters.
2. Now store the values in a variable Password and concatinate the value in Password with each iteration.
3. Display the generated password to the inputbox.



  

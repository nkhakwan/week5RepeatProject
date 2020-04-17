# _Planet Age Calculator_

#### _Epicodus Week 5 Project_

#### By _**KhaanSahab**_

## Description

_This website determines a person age in various planet years. The person needs to input his age in the World and it'll give his ages according to Mercury, venus, mars and Jupiter years. This website also returns remaining life of the user on each planet depending on the life expectancy user enters. Or returns how many years has he lived past his life expectancy if his age is more than the life expectancy_


## Setup/Installation Requirements

* Clone the project and go in the root directory and type 
* npm install _to install dependencies_
* npm run start _to build it and have the website displayed_
* npm run lint _to see there are no errors_
* npm test to run the tests and see all of the test pass.

## Known Bugs

None. Js file calculates every thing correctly. Tests can be seen and the test file can also be see how it is testing.

## Support and contact details

_Have a bug or an issue with this application? email post_khan@yahoo.com_

## Technologies Used

Git and GitHub
JavaScript
jQuery
functions
NPM
Webpack
lintrc
WebpackHTML plugins
Jest and Babel.
JS classes



1- Assuming we are making a webPage too, the user would have to input his age in the World and life expectancy. And will recieve back 4 planet ages plus how many years left or how many years he is already completed beyond expectancy. function inside the class would determine which is the case for the second output.

2- class would be passed age and life expectancy thru constructors.
3- Code function "plAgesExpects" that calculates planet age and expectancy on each planet when world age and World expectancy is passed to it.
4- Code function "yearsLeftPassed" that calculates years left or passed beyond expectancy on each planet. It returns a string whether "yearsLeft" or "yearsOverlived" and the corresponding value.

1- test function yearsLeftPassed whether results are ok on received. pass ages and expectancies on new planets directly
2- test function plAgesExpects by passing World age and World Expectancy directly to the constructors.
3- Make them fail by having different results.



## Specs Input
| Spec | Input | result |
| :-------------  | :-----------------------------------------------------| :----------------------------------------|
| **build**  | User Input:"npm run start" | Output: "bundle.js and index.js are built inside dist dir" |
| **lint** | User Input: "npm run lint" | Output: "Shows it has zero erros. Shows identation warning"|
| **Test** | User Input: "npm test" | Output: "Six Tests are run and it shows all are passing"|
### **Test type 1 _Two tests testing this method_**  
##### Test Input to a method "yearsLeftPassed":        "yearsLeftPassed([10, 8, 6, 1], [30, 30, 30, 40]))"
##### Test Output: [[20, 22, 24, 39], ["left Mercury", "left Venus", "left Mars", "left Jupiter"]]
###### Explanation: Test output shows two arrays. First displays the difference between age and expected age on Mercury, Venus, Mars and Jupiters. Second Array displays the corresponding planets and whether year are left or the person has overlived his life on each planet.
### **Test type 2 _ Two tests passing parameters to class constructors and getting output from main method_**
##### Test Input to class constructors with age **less** than expectancy : "ageCalculator = new AgeCalculator(79, 90);"
##### Test Output from method ageCalculator.plAgesExpects(): ["329 45 left Mercury", "127 17 left Venus", "42 5 left Mars", "6 0 left Jupiter"]
###### Explanation: Output shows number of years, numbers of years left on each planet.

### **Test type 3 _ Two tests passing parameters to class constructors and getting output from main method_**
##### Test Input to class constructors with age **More** than expectancy : "ageCalculator = new AgeCalculator(90, 79);"
##### Test Output from method ageCalculator.plAgesExpects(): ["375 45 Overlived Mercury", "145 17 Overlived Venus", "47 5 Overlived Mars", "7 0 Overlived Jupiter"]
###### Explanation: Output shows number of years, numbers of years _**Overlived**_ and _not_ less on each planet.



### License


This software is licensed under the Epicodus inc license.

Copyright (c) 2020 **_Khan Sahab_**
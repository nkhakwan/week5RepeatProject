/// Please Note that first tests were written to fail the tests where they needed to fail. But those tests have been deleted
/// and only the tests written to verify it correctly are here. Thanks.

import { AgeCalculator } from './../src/ageCalculate.js';

describe('ageCalculator', () => {
  var ageCalculator;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// First Two tests verify just a single method with in the class by passing parameters to it. They see whether the difference//
/////// between the expectancy age and the actual age is correct and whether the method correctly see if the person has overlived //
/////// or has some years left.                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  test('should test the difference in expected and actual age and return years left not Overlived on each planet', () => { 
    ageCalculator = new AgeCalculator(24,104);
    expect(ageCalculator.yearsLeftPassed([10, 8, 6, 1], [30, 30, 30, 40])).toEqual([[20, 22, 24, 39], ["left Mercury", "left Venus", "left Mars", "left Jupiter"]]);
  });

  test('should test the difference in expected and actual age and return years Overlived and not left on each planet', () => { 
    ageCalculator = new AgeCalculator(24,104);
    expect(ageCalculator.yearsLeftPassed([40, 50, 60, 70], [10, 10, 10, 10])).toEqual([[30, 40, 50, 60], ["Overlived Mercury", "Overlived Venus", "Overlived Mars", "Overlived Jupiter"]]);
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////// These four tests pass parameters to two constructors of the class. Those two constructors are "age" and "expectancy age".//
  ////// and see whether the main Method within the class is returning correct values of age on each planet, whether the person   //
  //////  has overlived or he has left some age and by how much has he overlived and how much is left                             //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  test('should get age and expectancy in the World and return ages on each planet and years left and indicate years are left and not overlived', () => { 
    ageCalculator = new AgeCalculator(79, 90);
    expect(ageCalculator.plAgesExpects()).toEqual(["329 45 left Mercury", "127 17 left Venus", "42 5 left Mars", "6 0 left Jupiter"]);
  });

  test('should get age and expectancy in the World and return ages on each planet and years left and indicate years are Overlived and not left', () => { 
    ageCalculator = new AgeCalculator(90, 79);
    expect(ageCalculator.plAgesExpects()).toEqual(["375 45 Overlived Mercury", "145 17 Overlived Venus", "47 5 Overlived Mars", "7 0 Overlived Jupiter"]);
  });

  test('should get age and expectancy in the World and return ages on each planet and years left and indicate years are left and not overlived', () => { 
    ageCalculator = new AgeCalculator(100, 300);
    expect(ageCalculator.plAgesExpects()).toEqual(["416 833 left Mercury", "161 322 left Venus", "53 106 left Mars", "8 16 left Jupiter"]);
  });

  test('should get age and expectancy in the World and return ages on each planet and years left and indicate years are Overlived and not left', () => { 
    ageCalculator = new AgeCalculator(300, 100);
    expect(ageCalculator.plAgesExpects()).toEqual(["1250 833 Overlived Mercury", "483 322 Overlived Venus", "159 106 Overlived Mars", "25 16 Overlived Jupiter"]);
  });
});

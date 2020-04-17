import { AgeCalculator } from './../src/ageCalculate.js';

describe('ageCalculator', () => {
  var ageCalculator;

   //beforeEach(() => {
    //  ageCalculator = new AgeCalculator(24,79);
  // });

  //test('should test whether our number of days are correct', () => { 
   // ageCalculator = new AgeCalculator(24,79);
   // expect(ageCalculator.yearsLeftPassed([89,71, 12, 7], [90, 80, 14, 10])).toEqual("nothing");
 // });

  test('should test whether our number of days are correct', () => { 
    ageCalculator = new AgeCalculator(79, 90);
    expect(ageCalculator.plAgesExpects()).toEqual("nothing");
  });


  /*test('should test whether our number of days are correct', () => { 
    dayCalculate = new DayCalculate(2064,4,17);
    expect(dayCalculate.dayFinder()).toEqual("Thursday");
  });  

  */
  
}); // end of describe

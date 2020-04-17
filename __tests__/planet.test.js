import { DayCalculate } from './../src/dayCalculate.js';

describe('DayCalculate', () => {
  var dayCalculate;

  // beforeEach(() => {
  //    dayCalculate = new DayCalculate(2025,11,11);
  // });

  test('should test whether our number of days are correct', () => { 
    dayCalculate = new DayCalculate(2025,11,11);
    expect(dayCalculate.dayFinder()).toEqual("Teusday");
  });

  test('should test whether our number of days are correct', () => { 
    dayCalculate = new DayCalculate(2064,4,17);
    expect(dayCalculate.dayFinder()).toEqual("Thursday");
  });  

  test('should test what numerical day of the year a given date is', () => { 
    dayCalculate = new DayCalculate(2025,11,15);
    expect(dayCalculate.numberOfDays()).toEqual(319); //319
  });

  test('should test what numerical day of the year a given date is', () => { 
    dayCalculate = new DayCalculate(2020,1,15);
    expect(dayCalculate.numberOfDays()).toEqual(15); //15
  });

  test('should test what the first day of the year is for a given date', () => { 
    dayCalculate = new DayCalculate(2025,11,15);
    expect(dayCalculate.firstDayOfTheYearFinder()).toEqual(3); //3
  });

  test('should test what the first day of the year is for a given date', () => { 
    dayCalculate = new DayCalculate(2021,5,10);
    expect(dayCalculate.firstDayOfTheYearFinder()).toEqual(5); //5
  });
  
}); // end of describe

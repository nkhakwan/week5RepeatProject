export class AgeCalculator {
  constructor(age,expect){
    this.age = age;
    this.expect = expect;
  }

  plAgesExpects (){
    let ages = [];
    let expectancies = [];
    ages.push (this.age/.24);
    ages.push (this.age/.62);
    ages.push (this.age/1.8);
    ages.push  = (this.age/11.86);
    expectancies.push (this.expect/.24);
    expectancies.push(this.expect/.62);
    expectancies.push(this.expect/1.88);
    expectancies.push(this.expect/11.86);
    return this.yearsLeftPassed(ages, expectancies);
  }

  yearsLeftPassed(ages, expectancies){
    let diffPharase = [[0],[0]];
    let planet = ["Mercury", "Venus", "Mars", "Jupiter"];
    for (let i=0; i<ages.length; i=i+1){
      let yearDiff = expectancies[i]- ages[i];
      if (yearDiff >=0 ){
        diffPharase[0][i] = yearDiff;
        diffPhrase[1][i] = `Your expected of years to live on planet ${planet[i]}`;
      } else {
        diffPharase[0][i] = yearDiff;
        diffPhrase[1][i] = `You have overlived your life on planet ${planet[i]}`;
        
        }
    } 
    return diffPhrase;
  }



  numberOfDays ()  {
    let totalDays = 0;
    let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if  ((this.year%4) === 0 && (this.month >2)){
        for (var i = 0; i < this.month; i=i+1){
          totalDays += months[i];
          //console.log(totalDays);
        }
        totalDays = totalDays +1 + this.date;
      } else {
        for (var i = 0; i < this.month; i=i+1){
          totalDays += months[i];
          console.log(totalDays);
        }
        totalDays = totalDays + this.date;
        //console.log(totalDays);
      }
      console.log(totalDays);
      //numberOfDays = totalDays;
      return totalDays;
  }

  dayFinder() {
    let days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let ourDay = this.numberOfDays()%7;
    let offSet = 0;
    let day = "";
    for (var i=0; i<days.length; i=i+1){
      if (this.firstDayOfTheYearFinder() === i){   //firstDayOfTheYearFinder
        offSet = (i-1);
      }
    }
    //console.log(ourDay);
    for (var i = 0; i<days.length; i=i+1){
      if (ourDay === i){
        day= days[(i+offSet)%7];
        return day;
        //console.log(day+"we are in the loop");
      }// end of if
    } // end of for loop
  } // end of function
  firstDayOfTheYearFinder(){
    var firstDayOf2017 = 0;
    var futureFirstDayWithoutLeap = (this.year-2017) +firstDayOf2017;
    var leapYearAddition = Math.floor((this.year - 2017)/4);
    var futureFirstDayWithLeap= futureFirstDayWithoutLeap + leapYearAddition;
    var futureFirstDayWithoutRevolvingHassel = futureFirstDayWithLeap %7;
    console.log(futureFirstDayWithLeap + " " + futureFirstDayWithoutRevolvingHassel);
    return futureFirstDayWithoutRevolvingHassel;
  }
} // end of class







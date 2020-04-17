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
    let diffPhrase = [[0],[0]];
    let planet = ["Mercury", "Venus", "Mars", "Jupiter"];
    for (let i=0; i<ages.length; i=i+1){
      let yearDiff = expectancies[i]- ages[i];
      if (yearDiff >=0 ){
        diffPhrase[0][i] = yearDiff;
        diffPhrase[1][i] = `Your expected of years to live on planet ${planet[i]}`;
      } else {
        diffPhrase[0][i] = yearDiff;
        diffPhrase[1][i] = `You have overlived your life on planet ${planet[i]}`;
        }
    } 
    return diffPhrase;
  }

}
export class AgeCalculator {
  constructor(age,expect){
    this.age = age;
    this.expect = expect;
  }

  plAgesExpects (){
    let ages = [];
    let expectancies = [];
    ages.push(this.age/.24);
    ages.push(this.age/.62);
    ages.push(this.age/1.8);
    ages.push(this.age/11.86);
    expectancies.push (this.expect/.24);
    expectancies.push(this.expect/.62);
    expectancies.push(this.expect/1.88);
    expectancies.push(this.expect/11.86);
    console.log(ages);
    console.log(expectancies);
    let ageOutput = [];
    let partialResult = this.yearsLeftPassed(ages, expectancies);
    for( let i =0; i<ages.length; i =i +1){
      ageOutput[i]= `${Math.floor(ages[i])} ${partialResult[0][i]} ${partialResult[1][i]}`;
    }
    return ageOutput;
  }

  yearsLeftPassed(ages, expectancies){
    let diffPhrase = [[0],[0]];
    let planet = ["Mercury", "Venus", "Mars", "Jupiter"];
    for (let i=0; i<ages.length; i=i+1){
      let yearDiff = expectancies[i]- ages[i];
      if (yearDiff >=0 ){
        diffPhrase[0][i] = Math.floor(yearDiff);
        diffPhrase[1][i] = `left ${planet[i]}`;
      } else {
        diffPhrase[0][i] = Math.floor(Math.abs(yearDiff));
        diffPhrase[1][i] = `Overlived ${planet[i]}`;
        }
    } 
    return diffPhrase;
  }

}
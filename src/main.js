import { AgeCalculator } from './ageCalculate.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#test").submit(function(event){
    event.preventDefault();
    var yourAge = parseInt($("#yourAge").val());
    var expectancy  = parseInt($("#expectancy").val());
    var ageCalculator = new AgeCalculator(yourAge, expectancy);
    var OurResult = ageCalculator.plAgesExpects();
   $("#yourResults").text(OurResult);
  });
});



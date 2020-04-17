//import { PeanutButter } from './peanut-butter.js'
//import '../css/styles.css'
//import { Jelly } from './jelly.js'
//import { Bread } from './bread.js'
//import '../css/styles.css'
import { AgeCalculator } from './ageCalculate.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


var ageCalculator = new AgeCalculator(24, 79);
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var yourAge = parseInt($("#yourAge").val());
    var expectancy  = parseInt($("#expectancy").val());
    //var vegType   = parseInt($("#veg").val());
    ageCalculator(yourAge, expectancy);
   $("#yourResults").html(ageCalculator.plAgesExpects());
  });
});



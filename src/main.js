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



$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var yourAge = parseInt($("#yourAge").val());
    var expectancy  = parseInt($("#expectancy").val());
    //var vegType   = parseInt($("#veg").val());
    var ageCalculator = new (yourAge, expectancy);
    var OurResult = ageCalculator.plAgesExpects()

    ["416 833 left Mercury", "161 322 left Venus", "53 106 left Mars", "8 16 left Jupiter"]
   $("#yourResults").text(OurResult[0] + " " +OurResult[1]);
  });
});



//import { PeanutButter } from './peanut-butter.js'
//import '../css/styles.css'
//import { Jelly } from './jelly.js'
//import { Bread } from './bread.js'
//import '../css/styles.css'
import './styles.css';
import { PizzaOrders } from './pizza';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


var pizzaOrder = new PizzaOrders();
$(document).ready(function() {
  displayOrderDetails(pizzaOrder.size, pizzaOrder.toppingOne, pizzaOrder.toppingTwo);
  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("#size").val());
    var meatType  = parseInt($("#meat").val());
    var vegType   = parseInt($("#veg").val());
    pizzaOrder.addOrder(meatType,vegType,pizzaSize);
   $("#cost").html(pizzaOrder.orderPrice[pizzaOrder.id]);
   
  });
});



function submit() {
   var calendarDate = document.getElementById('calculateValue').value;
  //  console.log(calendarDate)
  
  var newDate = new Date(calendarDate);
var currentDate = new Date(); 

var TotalYear =currentDate.getFullYear() - newDate.getFullYear();

var TotalMonth =currentDate.getMonth() - newDate.getMonth();


var TotalDay =currentDate.getDay() - newDate.getDay() ;

if( TotalMonth <= TotalDay ){
  TotalYear;
}

// console.log(TotalYear)
document.getElementById('root').innerHTML = `Your Age is ${TotalYear}`
}

// var result = new Date()
// console.log(result)

// var popularnum = 2 + 2;
// console.log()
// var num = 1
// var num2 =num--
// console.log(num2)

// var num = (( 3 * 8) )/3

// console.log(num)

// var name = "ali " + "mushtaque"
// console.log(name)
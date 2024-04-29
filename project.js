
var myAge = 18;
if (myAge >= 18 ){
  console.log('you are eligible for votin' )
}else {
  console.log('you are not eligible for votin');
}







  var day
 function getDayOfWeek(dayNumber){
    switch (dayNumber) {
        case 1:
          day = 'Sunday';
          onsole.log(day);
          break;
        case 2:
          day = 'Monday';
          onsole.log(day);
          break;
        case 3:
          day = 'Tuesday';
          onsole.log(day);
          break;
        case 4:
          day = 'Wednesday';
          onsole.log(day);
          break;
        case 5:
          day = 'Thursday';
          onsole.log(day);
          break;
        case 6:
          day = 'Friday';
          onsole.log(day);
          break;
        case 7:
          day = 'Saturday';
          console.log(day);
          break;
    
        default:
          day = 'Invalid day number';
          break;
      }
     }
  getDayOfWeek(7);





var i = 1;
while(i<6){
  console.log(i);
  i++;
}





for (var i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
}





var num1 = 23;
var num2 = 45;
function sumTwo(num1,num2){
    console.log(num1+num2);
  }
  sumTwo(num1,num2)




var fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
fruits.forEach( fruit => {
    console.log(fruit);
      }
);
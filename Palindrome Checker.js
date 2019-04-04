function palindrome(str) {
    var reg = /[^a-z^0-9]/ig,
        y = str.replace(reg, ''),
        a = y.toLowerCase().split(''),
        length = y.length,
        f1 = a.slice(0, a.length/2),
        f2 = a.slice(a.length-a.length/2, a.length),
        f3 = a.slice((a.length-a.length/2)+1, a.length);
if(length%2 == 0&&f1.join('')==f2.reverse().join('')){
          return true
        }
else if(length%2!==0&&f1.join('')==f3.reverse().join('')){ 
          return true
        }
  return false;
}

console.log(palindrome('ferrthyy'));
console.log(palindrome('eyE'));
console.log(palindrome('commoc'));
console.log(palindrome('abaabatabaaba'));



function telephoneCheck(str) {
  var b = str.replace(/\D+/g, '');
     var c = str.match(/1?\s?\d{3}\s?\-?\d{3}-?\s?\d{4}/);
     var d = str.match(/1?\s?\(\d{3}\)\s?\-?\d{3}-?\s?\d{4}/);
   console.log((c))
  var a = b.length;
  if(c==str||d==str){return true;}
 
  else{
    return false;
  }
 
}

telephoneCheck("555-555-5555");



function rot13(str) { // LBH QVQ VG!
var a = str.split('');
 var  count = '';
 for (var i = 0; i<a.length; i++){
   if((a[i].charCodeAt()>77)&&(a[i].charCodeAt()<91)){
count +=(String.fromCharCode(a[i].charCodeAt()-13));
 }
   else if((a[i].charCodeAt()<78)&&(a[i].charCodeAt()>64)){
 count +=(String.fromCharCode(a[i].charCodeAt()+13));
 }
   else{
      count +=a[i];
   }
 }
  return  count;
}ьь
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));



function bestDriver(){
    var arr = [1,2,3,4,5,6,7,8,9,10];
  var j, temp;
  for(var i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
var a = bestDriver();
var driver1 = bestDriver();
var driver2 = bestDriver();
var driver3 = bestDriver();
var driver4 = bestDriver();
var driver5 = bestDriver();


function compareDriver(x, y){
const finalArray = [];
for(var i=0; i<x.length; i++){
if(x[i]!=y[i]&&x[i]>y[i]){
finalArray.push(y[i]-x[i]);
}
}
return finalArray;
}
function getDebt(driver)
{

  return compareDriver(a, driver).reduce((a1,b1)=>{return a1+b1})
}
console.log(getDebt(driver1));
console.log(getDebt(driver2));
console.log(getDebt(driver3));
console.log(getDebt(driver4));
console.log(getDebt(driver5));
//сюда можно рестовый оператор для множества аргументов
//здесь нужен цикл для перебора водителей
function whoBest(x,y,z,u,w){
//if(Math.max(x,y,z,u,w)==x){
//return "driver 1 is winner"
//}
var totalDebt = [];
for(var i=0; i<arguments.length;i++){
totalDebt.push(arguments[i]);
}

totalDebt.sort((a,b)=>{return b-a});
console.log(totalDebt[0]);
switch (totalDebt[0]) {
  case x:
    console.log( 'Driver 1' );
    break;
  case y:
    console.log( 'Driver 2' );
    break;
  case z:
    console.log( 'Driver 3' );
    break;
   case u:
    console.log( 'Driver 4' );
    break;
   case w:
    console.log( 'Driver 5' );
    break;
  default:
    console.log( 'OOps, something wrong' );
}

//else{
//return "driver 2 is winner"
//}
}
//console.log(a);
//console.log(driver1);
//console.log(driver2);

//console.log(typeof debt1);
//console.log(debt2);
whoBest(getDebt(driver1),getDebt(driver2),getDebt(driver3),getDebt(driver4),getDebt(driver5));


function moveBlock(n, x, y, z)                      
{
   if(n <= 0)                                     
      return;
   moveBlock(n-1, x,z,y);                            
   console.log('#'+n+x+'->'+y+", ");                 
   moveBlock(n-1, z,y,x);                            
   return;                                        
}
console.log(moveBlock(8,"slot_a","slot_c","slot_b"));





function archers() 
{
 function getRandom(max, min) {
  return Math.random() * (max - min) + min; 
}
  //создаем рандомную функцию, полученния изначальных шансов на попадание в противника.
 var me = Math.floor((1-getRandom(0.3,0.1).toFixed(2))*10);  //расчитываем шаг на котором вероятность попадания приближенная к 100%;
  var player2 = Math.floor((1-getRandom(0.3,0.1).toFixed(2))*10);
 // расчитываем шаг противника на котором вероятность попадания приближенная к 100%;
   var queee = getRandom(1,2).toFixed(0);//тянем жребий, чья первая очередь стрелять/ходить;
 if(queee==1){ if(me>=player2){return 'You are first, but your chances are lower, shoot in the '+player2+' step'}
             else{return 'You are first, shoot in the '+me+' step';}
             }
     /*условие что я хожу первым(считаем что нам извесны шансы на попадания противника), в таком случае, два варианта:1. мои шансы на попадание ниже, тогда я должен выстрелить до того как выстрелить соперник, тоесть на шаге на котором он собирается  стрелять.
     2.если мои шансы выше то я стреляю, по расчетам на своем шаге*/
 else {if(me>=player2){return 'You are second, be carefull, shoot in the '+(player2-1)+' step';}
       else{return 'You are second, shoot in the '+me+' step';}}
}
    /*условие усли я хожу вторым, в таком случае, я сравниваю свои и шансы противника, если мои шансы ниже, тогда я должен опередить противника на шаг.
     Если мои шансы выше то я стреляю, по расчетам на котором должен стрелять противник*/
console.log(archers());




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>This example calls a function to convert from Fahrenheit to Celsius:</p>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<input type='number' id='cel' placeholder="Celsius">
<input type='number' id='far' placeholder="Far">
<input type='number' id='kel' placeholder="Kel">

<script>

var d = JSON.parse('{}');
function toCelsius() {
var c = document.getElementById('cel').value;
d.C=c;
d.F=((9/5)*c+32);
d.K=(+c+273.15);

}

function toFar() {
var f = document.getElementById('far').value;
d.C=((5/9)*(+f-32));
d.F=f;
d.K=((+f-32)*5/9+273.15);
document.getElementById("demo1").innerHTML = d.C+" Cel";
document.getElementById("demo2").innerHTML = d.F+" Far";
document.getElementById("demo3").innerHTML = d.K+" Kel";
}

function toKel() {
var k = document.getElementById('kel').value;
d.C=(+k-273.15);
d.F=((+k-273.15)*9/5+32);
d.K=k;
document.getElementById("demo1").innerHTML = d.C+" Cel";
document.getElementById("demo2").innerHTML = d.F+" Far";
document.getElementById("demo3").innerHTML = d.K+" Kel";
}

function common(){
document.getElementById("cel").addEventListener("keyup", toCelsius);
document.getElementById("far").addEventListener("keyup", toFar);
document.getElementById("kel").addEventListener("keyup", toKel);

}
common();

console.log(d)
</script>

</body>
</html>
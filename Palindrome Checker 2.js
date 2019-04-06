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
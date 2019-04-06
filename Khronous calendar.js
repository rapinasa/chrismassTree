
function getDay(x){

var date = new Date(x);
var fullYear= date.getFullYear();
var month= date.getMonth();
var dateMonth = date.getDate();
date.setDate(date.getDate() - (getYearDifference(fullYear)+getMonthDifference(month, fullYear)+getDayDifference(dateMonth,month,fullYear)));
var day = date.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		function getYearDifference(x){
		var yearKhronos = [];
		var year = [];
		for(var i=0; i<x; i++){
		if(i%5==0){
		if(i%100==0&&i%500!=0){yearKhronos.push(360);}
		else{yearKhronos.push(361);}
		}
		else{yearKhronos.push(360);}
		}
		for(var i=0; i<x; i++){
		if(i%4==0){
		year.push(366);}
		else{year.push(365);}
		}
		var result = year.reduce((b,c)=>{return b+c})-yearKhronos.reduce((b,c)=>{return b+c});
		return result;
		}

		function getMonthDifference(x,y){
		var yearKhronos = [];
		if(x==0){return 0}
		for(var i=0; i<x; i++){
		if(i==1){
		if(y%4==0&&y%5!=0){yearKhronos.push(-1);}
		else if (y%5==0&&y%4!=0){yearKhronos.push(-3);}
		else {yearKhronos.push(-2);}
		}
		else if((i==3)&&(i==5)&&(i==8)&&(i==10)){yearKhronos.push(0);}
		else{yearKhronos.push(1);}
		}
		var result = yearKhronos.reduce((b,c)=>{return b+c});
		return result;
		}

		function getDayDifference(x,y,z){
		if(x==31){return 1}
		   else if((x==29)&&(y==1)&&(z%5!=0)){return -1}
		   else if((x==29)&&(y==1)&&(z%5==0)){return -2}
		   else if((x==28)&&(y==1)&&(z%5!=0)){return -2}
		   else if((x==28)&&(y==1)&&(z%5==0)){return -3}
		else {return 0}
		}

return  days[day];
}
getDay('1001-08-24'); // write YY-MM-DD to see Khronos weekday



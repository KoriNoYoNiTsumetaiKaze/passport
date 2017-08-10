function addDay(numberDay,birthdate_day) {
	var newOption	= document.createElement('option');
	newOption.value = numberDay;
	newOption.innerHTML = numberDay;
	birthdate_day.appendChild(newOption);
}

function removeDay(numberDay,birthdate_day,day) {
	var dayRemove	= '';
	for (var i = 0; i < day.length; i++)
		if (day[i].value==numberDay) {
			dayRemove	= day[i];
		}
	if (dayRemove!='') birthdate_day.removeChild(dayRemove);
}

function setDays() {
	var birthdate_day			= document.getElementById('birthdate_day');
	var birthdate_month_value	= document.getElementById('birthdate_month').value;
	var birthdate_year_value	= document.getElementById('birthdate_year').value;
	
	var day	= birthdate_day.children;
	var flagAdd29	= true;
	var flagAdd30	= true;
	var flagAdd31	= true;
	for (var i = 0; i < day.length; i++) {
		if (day[i].value==29) flagAdd29	= false;
		if (day[i].value==30) flagAdd30	= false;
		if (day[i].value==31) flagAdd31	= false;
	}
	if (birthdate_month_value==1
		|| birthdate_month_value==3
		|| birthdate_month_value==5
		|| birthdate_month_value==7
		|| birthdate_month_value==8
		|| birthdate_month_value==10
		|| birthdate_month_value==12) {
		if (flagAdd30) addDay(30,birthdate_day);
		if (flagAdd31) addDay(31,birthdate_day);
	}
	else {
		if (birthdate_month_value==2) {
			if (!flagAdd30) removeDay(30,birthdate_day,day);
			if (!flagAdd31) removeDay(31,birthdate_day,day);
			if ((birthdate_year_value%4==0 && birthdate_year_value%100!=0) || birthdate_year_value%400==0) {
				if (flagAdd29) addDay(29,birthdate_day);
			}
			else removeDay(29,birthdate_day,day);
		}
		else {
			if (flagAdd30) addDay(30,birthdate_day);
			if (!flagAdd31) removeDay(31,birthdate_day,day);
		}
	}
}

onload	= function() {
	
	var birthdate_year	= document.getElementById('birthdate_year');
	var nowYear	= new Date().getFullYear();
	for (var i = nowYear-14; i > nowYear-100; i--) {
		var newOption	= document.createElement('option');
		newOption.value = i;
		newOption.innerHTML = i;
		birthdate_year.appendChild(newOption);
	}
	
	var birthdate_day	= document.getElementById('birthdate_day');
	for (var i = 1; i < 30; i++) {
		var newOption	= document.createElement('option');
		newOption.value = i;
		if (i<10) newOption.innerHTML = '0'+i
			else newOption.innerHTML = i;
		birthdate_day.appendChild(newOption);
	}
	
	setDays();
}

function ValidationForm() {
	var result	= true;
	var series	= document.getElementById('series');
	var series_value	= parseInt(series.value);
	if (isNaN(series_value)||String(series_value).length!=4) {
		result	= false;
		series.style.backgroundColor = 'red';
	}
	var number	= document.getElementById('number');
	var number_value	= parseInt(number.value);
	if (isNaN(number_value)||String(number_value).length!=6) {
		result	= false;
		number.style.backgroundColor = 'red';
	}
	return result;
}
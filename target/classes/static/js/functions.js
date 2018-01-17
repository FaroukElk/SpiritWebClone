function setSearchItinerary(flights, flightNum){
	/*<![CDATA[*/						
	var locationFrom = flights[flightNum]["locationFrom"];
	var locationTo = flights[flightNum]["locationTo"];
	var ticketPrice = flights[flightNum]["ticketPrice"];
						
	var fullLocFrom = getFullLocationName(locationFrom);
	var fullLocTo = getFullLocationName(locationTo);
						
	var flightID = flights[flightNum]["id"];
						
	var flightDate = flights[flightNum]["departDate"];
	var departTime = "";
	var arrivalTime = "";
						
	var month = parseInt(flightDate.substring(5,8));
	var day = parseInt(flightDate.substring(8,10));
	var year = parseInt(flightDate.substring(0,4));
						
	var fullMonthName = getFullMonthName(month);
	var dayOfWeek = getStringDayOfWeek(getIntDayOfWeek(flightDate));
	
	var departTimeHr = parseInt(flightDate.substring(11,13));
	var departTimeMin = flightDate.substring(14,16);
						
	if (checkPM(departTimeHr)){
		departTime = "" + departTimeHr + ":" + departTimeMin + " PM";
	}
	else{
		departTime = "" + departTimeHr + ":" + departTimeMin + " AM";
	}
						
	var arrivalTimeHr = flights[flightNum]["arrivalTime"]["hour"];
	var arrivalTimeMin = flights[flightNum]["arrivalTime"]["minute"];
						
	if (checkPM(arrivalTimeHr)){
		arrivalTime = "" + arrivalTimeHr + ":" + arrivalTimeMin + " PM";
	}
	else{
		if (arrivalTimeMin < 10){
			arrivalTimeMin = "0" + arrivalTimeMin;
		}
		arrivalTime += arrivalTimeHr + ":" + arrivalTimeMin + " AM";
	}
						
	$("#itin-from").html(fullLocFrom);
	$("#itin-to").html(fullLocTo);
	$("#itin-from-code").html(locationFrom);
	$("#itin-to-code").html(locationTo);
	$("#itin-depart-weekday").html(dayOfWeek);
	$("#itin-depart-date").html(fullMonthName + " " + day + ", " + year);
	$("#itin-depart-time").html(departTime);
	$("#itin-arrival-time").html(arrivalTime);
	$("#depart-info-row").html(departTime);
	$("#arrive-info-row").html(arrivalTime);
	$("#flightID").val(flightID);
	$("#standard-info-row").html("$" + ticketPrice);
	/*]]>*/
}

function setConfirmItinerary(flight){
	var locationFrom = flight["locationFrom"];
	var locationTo = flight["locationTo"];
	var ticketPrice = flight["ticketPrice"];
						
	var fullLocFrom = getFullLocationName(locationFrom);
	var fullLocTo = getFullLocationName(locationTo);
						
	var flightID = flight["id"];
						
	var flightDate = flight["departDate"];
	var departTime = "";
	var arrivalTime = "";
						
	var month = parseInt(flightDate.substring(5,8));
	var day = parseInt(flightDate.substring(8,10));
	var year = parseInt(flightDate.substring(0,4));
						
	var fullMonthName = getFullMonthName(month);
	var dayOfWeek = getStringDayOfWeek(getIntDayOfWeek(flightDate));
	
	var departTimeHr = parseInt(flightDate.substring(11,13));
	var departTimeMin = flightDate.substring(14,16);
						
	if (checkPM(departTimeHr)){
		departTime = "" + departTimeHr + ":" + departTimeMin + " PM";
	}
	else{
		departTime = "" + departTimeHr + ":" + departTimeMin + " AM";
	}
						
	var arrivalTimeHr = flight["arrivalTime"]["hour"];
	var arrivalTimeMin = flight["arrivalTime"]["minute"];
						
	if (checkPM(arrivalTimeHr)){
		arrivalTime = "" + arrivalTimeHr + ":" + arrivalTimeMin + " PM";
	}
	else{
		if (arrivalTimeMin < 10){
			arrivalTimeMin = "0" + arrivalTimeMin;
		}
		arrivalTime += arrivalTimeHr + ":" + arrivalTimeMin + " AM";
	}
						
	$("#itin-from").html(fullLocFrom);
	$("#itin-to").html(fullLocTo);
	$("#itin-from-code").html(locationFrom);
	$("#itin-to-code").html(locationTo);
	$("#itin-depart-weekday").html(dayOfWeek);
	$("#itin-depart-date").html(fullMonthName + " " + day + ", " + year);
	$("#itin-depart-time").html(departTime);
	$("#itin-arrival-time").html(arrivalTime);
	$("#depart-info-row").html(departTime);
	$("#arrive-info-row").html(arrivalTime);
	$("#flightID").val(flightID);
	$("#standard-info-row").html("$" + ticketPrice);
	/*]]>*/
}
					
function checkPM(hour){
	if (hour >= 12){
		return true;
	}
	else{
		return false;
	}
}

function uncheckSelected(){
	dateID = "";
	/*<![CDATA[*/
	for (var i = 1; i < 7; i++){
		dateID = "#date" + i;
		if ($(dateID).hasClass("selected")){
			$(dateID).removeClass("selected");
		}
	}
	/*]]>*/
}
					
function setFlightSelection(flights, daysOfFlights, date, day){
	if (flights.length == 0){}
	else{
		var month = date.substring(5,7);
		var dayOfWeek = getIntDayOfWeek(date);
		var flightDateText;
		var ticketContainer;
		var dateContainer;
		var dateID;
		var ticketPrice;
		var i = 1;
		var j = 0;
		var currDay = day;
		/*<![CDATA[*/
		for(i; i < 7; i++){
			if(currDay > 27){
				if (currDay > checkDate(month)){
					currDay = 1;
				}
			}
			dateID = "#date" + i;
			dateContainer = "#date-container" + i;
			ticketContainer = "#ticket-price" + i;
			weekday = getAbbrevDayOfWeek(dayOfWeek);
			flightDateText = weekday + "<span class='float-right'>"  + currDay + "</span>";
			if (day = daysOfFlights[j]){
				ticketPrice = flights[i-1]["ticketPrice"];
										
				$(ticketContainer).html('$'+ticketPrice);
				j++;
				$(dateID).addClass("flight-dates");
			}
			else{
				$(dateID).addClass("no-flight-date");
			}
			$(dateContainer).html(flightDateText);
			currDay++;
			dayOfWeek = (dayOfWeek + 1) % 7;
			}
		/*]]>*/
	}
}
					
					
function getFullMonthName(month){
	switch(month){
		case 1:
			return "January";
			break;
		case 2:
			return "February";
			break;
		case 3:
			return "March";
			break;
		case 4:
			return "April";
			break;
		case 5:
			return "May";
			break;
		case 6:
			return "June";
			break;
		case 7:
			return "July";
			break;
		case 8:
			return "August";
			break;
		case 9:
			return "September";
			break;
		case 10:
			return "October";
			break;
		case 11:
			return "November";
			break;
		case 12:
			return "December";
			break;
	}
}
function checkDate(month){
	var checkDay;
	switch (month){
		case '01': case '03': case '05': case '07': case '08': case '10': case '12':
			checkDay = 31;
			break;
		case '04': case '06': case'09': case'11':
			checkDay = 30;
			break;
		case '02':
			checkDay = 28;
			break;
	}
	return checkDay;
}
					
function getDateHeader(date, datePlus5){
	var month1 = date.substring(5,7);
	var day1 = date.substring(8,10);
					
	var month2 = datePlus5.substring(5,7);
	var day2 = datePlus5.substring(8, 10);
						
	month1 = getMonth(month1);
	month2 = getMonth(month2);
						
	var header = month1.concat(" ", day1, " - ",month2, " ", day2); 
	return header;
}
					
function getDaysOfFlights(flights){
	var daysOfFlights = [];
	var days = 0;
	/*<![CDATA[*/
	for(var i = 0; i < flights.length; i++){
		days = parseInt(flights[i]["departDate"].substring(8,10));
		daysOfFlights.push(days);
	}
	/*]]>*/
	return daysOfFlights;
}
					
function getAbbrevDayOfWeek(day){
	switch(day){
		case 0:
			return "Sun";
			break;
		case 1:
			return "Mon";
			break;
		case 2:
			return "Tue";
			break;
		case 3:
			return "Wed";
			break;
		case 4:
			return "Thur";
			break;
		case 5:
			return "Fri";
			break;
		case 6:
			return "Sat";
			break;
	}
}
					
function getStringDayOfWeek(day){
	switch(day){
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
			break;
	}
}
					
function getIntDayOfWeek(date){
	var month = parseInt(date.substring(5,7)) - 1;
	var day = parseInt(date.substring(8,10));
	var year = parseInt(date.substring(0,4));
						
	var date = new Date();
	date.setFullYear(year, month, day);
	var dayOfWeek = date.getDay();
	return dayOfWeek;
}
					
function getMonth(month){
	switch(month){
		case '01':
			month = 'Jan';
			break;
		case '02':
			month = 'Feb';
			break;
		case '03':
			month = 'Mar';
			break;
		case '04':
			month = 'Apr';
			break;
		case '05':
			month = 'May';
			break;
		case '06':
			month = 'Jun';
			break;
		case '07':
			month = 'Jul';
			break;
		case '08':
			month = 'Aug';
			break;
		case '09':
			month = 'Sep';
			break;
		case '10':
			month = 'Oct';
			break;
		case '11':
			month = 'Nov';
			break;
		case '12':
			month = 'Dec';
			break;	
	}
	return month;
}
					
					
function getFullLocationName(IATAcode){
	switch(IATAcode){
		case 'BQN':
			return "Aguadilla, Puerto Rico";
			break;
		case 'CAK':
			return "Akron/Canton, Ohio";
			break;
		case 'AXM':
			return "Armenia, Columbia";
			break;
		case 'AUA':
			return "Aruba, Aruba";
			break;
		case 'ATL':
			return "Atlanta, Georgia";
			break;
		case 'ACY':
			return "Atlantic City, New Jersey";
			break;
		case 'BWI':
			return "Baltimore, Maryland / Washington, DC Area";
			break;
		case 'BOG':
			return "Bogota, Colombia";
			break;
		case 'BOS':
			return "Boston, Massachussetts";
			break;
		case 'IAG':
			return "Buffalo, NY Area / Niagara Falls, NY";
			break;
		case 'SJD':
			return "Cabo San Lucas/Los Cabos, Mexio";
			break;
		case 'CUN':
			return "Cancun, Mexico";
			break;
		case 'CTG':
			return "Cartagena, Colombia";
			break;
		case 'CRW':
			return "Charleston, West Virvinia";
			break;
		case 'ORD':
			return "Chicago, Illinois - O'Hare";
			break;
		case 'CLE':
			return "Cleveland, Ohio";
			break;
		case 'CMH':
			return "Colombus, Ohio";
			break;
		case 'DFW':
			return "Dallas/Fort Worth, Text";
			break;
		case 'DEN':
			return "Denver, Colorado";
			break;
		case 'DTW':
			return "Detroit, Michigan";
			break;
		case 'FLL':
			return "Fort Lauderdale, Florida";
			break;
		case 'RSW':
			return "Fort Myers, Florida";
			break;
		case 'GUA':
			return "Guatemala City, Guatemala";
			break;
		case 'BDL':
			return "Hartford, Conneticut";
			break;
		case 'IAH':
			return "Houston, Texas";
			break;
		case 'MCI':
			return "Kansas City, Missouri";
			break;
		case 'KIN':
			return "Kingston, Jamaica";
			break;
		case 'LAS':
			return "Las Vegas, Nevada";
			break;
		case 'LBE':
			return "Latrobe, Pennsylvania";
			break;
		case 'LIM':
			return "Lima, Peru";
			break;
		case 'LAX':
			return "Los Angeles, California";
			break;
		case 'MGA':
			return "Managua, Nicaragua";
			break;
		case 'MDE':
			return "Medellin, Colombia";
			break;
		case 'MSP':
			return "Minneapolis/St. Paul, Minnesota";
			break;
		case 'MBJ':
			return "Montego Bay, Jamaica";
			break;
		case 'PBG':
			return "Montreal, Canada AREA / Plattsburgh, NY";
			break;
		case 'MYR':
			return "Myrtle Beach, South Carolina";
			break;
		case 'MSY':
			return "New Orleans, Louisiana";
			break;
		case 'LGA':
			return "New York, New York - LaGuardia";
			break;
		case 'EWR':
			return "Newark, New Jersey";
			break;
		case 'OAK':
			return "Oakland, California";
			break;
		case 'MCO':
			return "Orlando, Florida";
			break;
		case 'PTY':
			return "Panama City, Panama";
			break;
		case 'PHL':
			return "Philadelphia, Pennsylvania";
			break;
		case 'PHX':
			return "Phoenix, Arizona";
			break;
		case 'PIT':
			return "Pittsburgh, Pennsylvania";
			break;
		case 'PBG':
			return "Plattsburgh, New York / Montreal, Canada AREA";
			break;
		case 'PAP':
			return "Port-au-Prince, Haiti";
			break;
		case 'PDX':
			return "Portland, Oregon";
			break;
		case 'PUJ':
			return "Punta Cana, Dominican Republic";
			break;
		case 'RIC':
			return "Richmond, Virginia";
			break;
		case 'SAN':
			return "San Diego, California";
			break;
		case 'SJO':
			return "San Jose, costa Rica";
			break;
		case 'SJU':
			return "San Juan, Purto Rico";
			break;
		case 'SAP':
			return "San Perdo Sula, Honduras";
			break;
		case 'SAL':
			return "San Salvador, El Salvador";
			break;
		case 'STI':
			return "Santiago, Dominican Republic (STI)";
			break;
		case 'SDQ':
			return "Santo Domingo, Dominican Republic";
			break;
		case 'SEA':
			return "Seattle-Tacoma, Washington";
			break;
		case 'SXM':
			return "St. Maarten, St. Maarten";
			break;
		case 'STT':
			return "St. Thomas, U.S. Virgin Islands";
			break;
		case 'TPA':
			return "Tampa, Florida";
			break;
		case 'PBI':
			return "West Palm Beach, Florida";
			break;
	}	
}
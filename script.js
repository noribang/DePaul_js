// Student: Hoon Kim
// Date:    March 3, 2016
// Class:   IPD_356_801_0965 - WEB DEV JAVASCRIPT & HTML5 PRG - 
// Term:    2015-2016 Winter

function estimateCost() {
	var surChargeRadCity = 0;
	var surChargeFirstClass = 0;
    var tripCost = 0;
	
    var valRadCity = document.forms["form1"]["radCity"].value;

    if(valRadCity == '') {
        alert('Please enter a city to begin.');
    }
    else {
            //1. Choose Nationality
            var valNation = document.forms["form1"]["selNationality"].value;
            console.log("Nationality = " + valNation);
            if(valNation == "amer" || valNation == "can") {
                alert("You do not require a passport for this trip.");
            }
            else {
                alert("You are required to have a passport for this trip.");
            }

            //2. City to visit
            var valRadCity = document.forms["form1"]["radCity"].value;
            //console.log("valRadCity = " + valRadCity);
            if(valRadCity == "San Francisco" || valRadCity == "Los Angeles") {
                surChargeRadCity = 200.00;
                //city = surChargeRadCity.toString();
                console.log(" There will be a $" + surChargeRadCity.toString() +  " surcharge for " + valRadCity);
            }
            else {
                surChargeRadCity = 0;
                console.log(" There will be a $" + surChargeRadCity.toString() +  " surcharge for " + valRadCity);
            }


            //3. Number of days
            var valDays = document.forms["form1"]["selNumberDays"].value;   
            tripCost = valDays * 150.00;
            console.log("Number of days = " + valDays);
            console.log("Cost of trip without any surcharges will be " + valDays + " * $150.00 = $" + tripCost);
            

            //4. Choose First Class
            var firstClass = document.forms["form1"]["chkFirst"].checked;
            console.log("firstClass is " + firstClass)
            if(firstClass == true) {
                surChargeFirstClass = 500.00;
                firstClass = surChargeFirstClass.toString();
                console.log("There will be a firstClass charge of $" + firstClass);
            }
            else {
                surChargeFirstClass = 0;
                firstClass = surChargeFirstClass.toString();
                console.log("There will be a firstClass charge of $" + firstClass);
            }
            
            var totalCost = tripCost + surChargeRadCity + surChargeFirstClass;
            var dblCost = 2 * totalCost;
            //5. Choose traveling with Spouse
            var travelSpouse = document.forms["form1"]["chkSpouse"].checked;
            console.log("travelSpouse is " + travelSpouse);
            if(travelSpouse == true) {
                alert("Your estimated cost for this trip with spouse to " + valRadCity + " for " + valDays +" days is: $" + dblCost.toString());
            }
            else {
                alert("Your estimated cost for this trip without your spouse to " + valRadCity + " for " + valDays +" days is: $" + totalCost.toString()); 
            }
    }//end else
}//end function
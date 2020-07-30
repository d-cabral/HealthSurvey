/ * 

Note: To run this code open the Health Work Tracker Survey Page
Link: https://forms.office.com/Pages/ResponsePage.aspx?id=mT-XW99360uyfaoMcLhILE31fuiRD4FFnNO_2OVb2YRUQUVSWlg0NDJGOU5OMVM3WEs5SDZNSkZLVS4u

Remarks: For the 1st question Select Yes and Hit Next
Afterwards open developers mode of the browser Press F12 
Navigate to the Console Page and paste the code to the console tab

* /

var myAddress = '100 F. Castro St Barangay 1 Nasugbu, Batangas' // Put here Your Complete Address
var gpn = 'PH011612696';
var contactNumber = "09176230820";

stateChange('Question2');
stateChange('Question3');
stateChange('Question4');
  
function stateChange(condition) {
    setTimeout(function () { 
		switch(condition) {
		  case "Question2": 
			Question2();
			break;
		  case "Question3":
			Question3(); 
			break;
		  case "Question4":
			Question4(); 
			break;
		  case "Question5":
			Question5(); 
			break;
		  case "Question6":
			Question6(); 
			break;
		  case "Question7":
			Question7(); 
			break;
		  case "Question8":
			Question8(); 
			break;
		  case "Question9":
			Question9(); 
			break;
		  case "Question10":
			Question10(); 
			break;
		  case "Question11":
			Question11(); 
			break;
		  case "Question12":
			Question12(); 
			break;
		  case "Question13":
			Question13(); 
			break;
		  case "Question14":
			Question14(); 
			break; 
		  default:
			SubmitSurvey();
			 // alert('Something went wrong possibly. Do something here and comment this line out!');
		}
		
    }, 5000);
}

/ * Process the clicking of Radio Buttons * /
function clickRadio(questionDescription, labelDescription) {
	var lbls = document.getElementsByClassName('office-form-question-content office-form-theme-focus-border');
	// console.log(lbls.length);
	for (var i = 0, len = lbls.length; i < len; i++) {		
		// console.log(lbls[i].textContent.toLowerCase() + ' test');
		if (lbls[i].textContent.toLowerCase().indexOf(questionDescription) !== -1) {
			var rads = lbls[i].getElementsByClassName('office-form-question-choice-row office-form-question-choice-text-row');
			// console.log(rads.length);
			for (var x = 0, rlen = rads.length; x < rlen; x++) {
				// console.log(rads[x].textContent.toLowerCase());
				// console.log(rads[x].textContent.toLowerCase().indexOf("no"));
				if (rads[x].textContent.toLowerCase().indexOf(labelDescription) !== -1) {
					rads[x].click();
					break;
				}
			}
		break;
		}
	}
}

/ * Process the filling up of text fields * /
function WriteValueToTextField(questionDescription,textFieldValue) {
	var lbls = document.getElementsByClassName('office-form-question-content office-form-theme-focus-border');
	// console.log(lbls.length);
	for (var i = 0, len = lbls.length; i < len; i++) {		
		// console.log(lbls[i].textContent.toLowerCase() + ' test');
		if (lbls[i].textContent.toLowerCase().indexOf(questionDescription) !== -1) {
			var textFields = lbls[i].getElementsByTagName('input');
			// console.log(textFields .length);
			for (var x = 0, tlen = textFields.length; x < tlen; x++) {			
				// console.log(textFields[x].tagName.toLowerCase());				
				textFields[x].value = textFieldValue;
			}
		break;
		}
	}
}

// #region Questionaire

/* how are you Question # 2 */
function Question2() {
	clickRadio("how are you feeling today", "i'm feeling great!");
}

/* currently residing Question # 3 */
function Question3() {
	WriteValueToTextField("where are you currently residing", myAddress);
}

/* where you working from Question # 4 */
function Question4() {
	clickRadio("where are you working from", "home");
}

/* location Question # 5 */
function Question5() {
	WriteValueToTextField("location", myAddress);
}

/* GPN # Question # 6 */
function Question6(){
	WriteValueToTextField('gpn (ph012345678)', gpn);
}

/* Mobile # Question # 7 */
function Question7(){
	WriteValueToTextField('contact number (mobile)', contactNumber);
}

/* How are your family Question # 8 */
function Question8() {
	clickRadio("any family or household members not feeling well", "i'm feeling great!");
}

/* someone living Covid19 past 21 days Question # 9 */
function Question9() {
	clickRadio("have you or someone living in your home been diagnosed with, or is suspected of having", "no");
}

/* close contact Covid19 past 21 days Question # 10 */
function Question10() {
	clickRadio("have you had close contact or worked together or stayed in the same close environment", "no");
}

/* any contact Covid19 past 21 days Question # 11 */
function Question11() {
	clickRadio("have you had any contact with anyone with fever, cough, colds, and sore throat", "no");
}

/* traveled outside Covid19 past 21 days Question # 12 */
function Question12() {
	clickRadio("have you traveled outside of the philippines in the past 21 days", "no");
}

/* within last 24 hours Question # 13 */
function Question13() {
	clickRadio("within the last 24 hours, have you traveled to any area in", "no");
}

/* by clicking accept and submit Question # 14 */
function Question14() {
	clickRadio("by clicking accept and submit, i hereby sign and certify", "i accept");
}
 
// #endregion Questionaire

/* by clicking accept and submit */
function SubmitSurvey() {
	var lbls = document.getElementsByClassName('office-form-button-container');
	// console.log(lbls.length);
	for (var i = 0, len = lbls.length; i < len; i++) {
		// console.log(lbls[i].tagName.toLowerCase() + ' test'); 
		var btns = lbls[i].getElementsByTagName('button');
		// console.log(btns.length);
		for (var x = 0, blen = btns.length; x < blen; x++) {
			// console.log(btns[x].textContent.toLowerCase());
			// console.log(btns[x].textContent.toLowerCase().indexOf("submit"));
			if (btns[x].textContent.toLowerCase().indexOf('submit') !== -1) {
				btns[x].click();
				// console.log('click submit');
				break;
			}

		}
		break;
	}
	
}
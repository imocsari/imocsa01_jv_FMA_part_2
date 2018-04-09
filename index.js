function Submit() {
  displayResult();

  }




function getCheckedRadio(op) {
    var radioButtons = document.getElementsByName(op);
    for (var x = 0; x < radioButtons.length; x ++) {
      if (radioButtons[x].checked) {
        var score = radioButtons[x].dataset.score;
     }
     }
     return score;
  }

function getResult() {
  var score = (parseInt(getCheckedRadio('op1'))
       + parseInt(getCheckedRadio('op2'))
       + parseInt(getCheckedRadio('op3'))
       + parseInt(getCheckedRadio('op4')));
  return score;
}

function riskFactor() {

  if (getResult() <= 15) {
    return("Your results show that you currently have a low risk of developing diabetes.  However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.")
} else if (getResult() >= 16 && getResult() <= 25) {
    return("Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at http://www.zha.org.zd. ")
} else {
    var str = "Contact form"
    return("Your results show that you currently have a HIGH risk of developing diabetes. [Your main risk factors" + countHighRisk() +  "your " + (highRisk().slice(0,(highRisk().length -1)).join(", ")).bold() + " and your " + (highRisk().slice(-1).join("")).bold() + ".] We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our " + str.link("form.html") +  " and a member of the Health Authority Diabetes Team will be in contact with you.")
  }
}

function displayResult() {
  var result = document.getElementById("result");
  result.innerHTML = (
    "<strong>Your result:</strong><br>" + riskFactor()
  )
  result.className = 'result';
}

function highRisk() {
  var age = parseInt(getCheckedRadio('op1'));
  var BMI = parseInt(getCheckedRadio('op2'));
  var diabetes = parseInt(getCheckedRadio('op3'));
  var diet = parseInt(getCheckedRadio('op4'));
  var high = { age: age,
               BMI: BMI,
               diabetes: diabetes,
               diet: diet
             };
   result = []
   for (var key in high) {
   if(high[key] >= 10) {
     result.push(key);
   }
 }
return result;

};

function countHighRisk() {
  return (highRisk().length > 1)? " are " : " is ";
}

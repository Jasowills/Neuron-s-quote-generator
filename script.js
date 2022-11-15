
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
   
  } else {
    document.getElementById("prevBtn").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
    
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  console.log('hey')
  var x = document.querySelector("input").value;
  document.getElementById("demo").innerHTML = `Hey , ${x} 👋`;
  console.log(x)
    
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
  let remove = document.querySelector('#remove')
  console.log(remove)
 

}



const GenerateQuote = async () => {
  var url = "https://type.fit/api/quotes";

  const response = await fetch(url);
  const Quote_list = await response.json();
  const randomIdx = Math.floor(Math.random() * Quote_list.length);
  const quoteText = Quote_list[randomIdx].text;
  const auth = Quote_list[randomIdx].author;

  if (!auth) author = "Anonymous";
  document.getElementById("QuoteText").innerHTML = quoteText;
  document.getElementById("author").innerHTML = "~ " + auth;
  
}

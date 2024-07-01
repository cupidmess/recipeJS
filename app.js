document.getElementById('b1').addEventListener('click', function() {
  // Get input values
  var totalIncome = parseFloat(document.getElementById('i1').value);
  var extraIncome = parseFloat(document.getElementById('i2').value);
  var ageGroup = document.getElementById('Age').value;
  console.log(ageGroup);
  var deductions = parseFloat(document.getElementById('i3').value);
  console.log("Total Income:", totalIncome);
    console.log("Extra Income:", extraIncome);
    console.log("Age Group:", ageGroup);
    console.log("Deductions:", deductions);


  // Calculate tax based on income, age group, and deductions
  var taxRate = calculateTaxRate(ageGroup);
  console.log("Tax Rate:", taxRate);
  var taxableIncome = totalIncome + extraIncome - deductions;
  console.log("Taxable Income:", taxableIncome);
  var taxAmount = taxableIncome * (taxRate/100);
  var res= totalIncome + extraIncome - taxAmount;
console.log("Tax amount",taxAmount);
  // Display result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML ="Your overall income after deductions will be: $" + res.toFixed(2);
  
});

// Function to calculate tax rate based on age group
function calculateTaxRate(ageGroup) {
    var taxr;
    if (ageGroup === '1') {
       taxr=0.01 ; // 10% tax rate for age 18-25
    } else if (ageGroup === '2') {
        taxr=0.01; // 15% tax rate for age 25-35
    } else if (ageGroup === '3') {
        taxr=0.01; // 15% tax rate for age 36-45
    } else if (ageGroup === '4') {
        taxr=0.01; // 10% tax rate for age 46-55
    } else {
        console.log("age group not defined");
    }
    return taxr;
}



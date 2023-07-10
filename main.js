
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('centimeters');
const submitButton = document.querySelector('.btn-primary');
const resultElement = document.querySelector('h2');
const message = document.querySelector('h4');


submitButton.addEventListener('click', calculateBMI);


function calculateBMI() {
  
  const age = Number(ageInput.value);
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; 
 
  const bmi = weight / (height * height);

  resultElement.textContent = 'Your BMI Value: ' + bmi.toFixed(2);
  

  if (bmi < 18.5) {
    message.textContent = 'You are Underweight ';
  } 
  
  else if (bmi >= 18.5 && bmi < 25) {
    message.textContent = 'Your Weight is Normal ';
  } 
  
  else if (bmi >= 25 && bmi < 30) {
    message.textContent = 'You Overweight ';
  } 
  
  else {
    message.textContent = 'Obese ';
  }

}



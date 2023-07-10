// Replace this with your code
// Get the required elements
const closeFormElement = document.querySelector('#close-form');
const formElement = document.querySelector('form');

// Event listener for the close button
closeFormElement.addEventListener('click', function() {
  formElement.classList.toggle('hide');
  const closeButton = document.querySelector('h3');
  closeButton.textContent = closeButton.textContent === 'X' ? '+' : 'X';
});

// Event listener for form submission
formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the input values
  const nameInput = formElement.querySelector('#name');
  const emailInput = formElement.querySelector('#email');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Reset borders
  nameInput.style.border = 'none';
  emailInput.style.border = 'none';

  // Check if name and email are empty
  if (name === '' && email === '') {
    nameInput.style.border = '2px solid red';
    emailInput.style.border = '2px solid red';
    alert('You must enter a name and an email address to subscribe!');
  } else if (name === '') {
    nameInput.style.border = '2px solid red';
    alert('Please enter a name to subscribe.');
  } else if (email === '') {
    emailInput.style.border = '2px solid red';
    alert('Please enter an email address to subscribe.');
  } else {
    // Replace the form with a success message
    formElement.parentNode.textContent = 'Thank you for subscribing!';
  }
});

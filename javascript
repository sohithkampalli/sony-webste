// Change button color on hover
function changeButtonColor(newColor) {
  var btn = document.getElementById('colorChangeButton');
  btn.style.backgroundColor = newColor;
}

// Validate email input
function validateEmail() {
  var email = document.getElementById('email').value;
  var message = document.getElementById('emailMessage');
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (regex.test(email)) {
    message.innerHTML = 'Valid Email';
    message.style.color = 'green';
  } else {
    message.innerHTML = 'Invalid Email';
    message.style.color = 'red';
  }
}

// Load more content
function loadMoreContent() {
  var content = document.getElementById('additionalContent');
  content.style.display = 'block';
}

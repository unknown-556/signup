import queryString from 'query-string';

const form = document.getElementById('signup-form');
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const name = queryString.parse(window.location.search).get('name');
  const email = queryString.parse(window.location.search).get('email');
  const password = queryString.parse(window.location.search).get('password');

  // Send the data to the backend
  fetch('/post', {
    method: 'POST',
    body: {
      'name': name,
      'email': email,
      'password': password
    }
  })
    .then(response => response.json())
    .then(response => {
      // Check response from the server
      if (response.status === 201) {
        console.log(`User successfully created with ID: ${response.id}`);
      } else {
        console.error(`Error creating user: ${response.message}`);
      }
      window.location.replace('/signup-success'); // redirect to the success page
    })
    .catch(error => {
      console.error(`Error sending user data: ${error}`);
    });
});

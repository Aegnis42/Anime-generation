const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';

const token = sessionStorage.getItem('token') || localStorage.getItem('token');
if (!token) {
  window.location.href = '../../index.html';
}

const userNameInput = document.querySelector('input[placeholder="User-name"]');
const emailInput = document.querySelector('input[placeholder="email"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const descTextarea = document.getElementById("profilDesc");
const profilPictureElement = document.getElementById("profilPicture");

document.getElementById("save").addEventListener("click", function() {
    const hashedPassword = CryptoJS.SHA256(passwordInput.value).toString();
  axios.put('https://afpatraining.snage.tech/profile', {
    username: userNameInput.value,
    email: emailInput.value,
    password: hashedPassword,
    description: descTextarea.value,
    profilePicture: profilPictureElement.getAttribute('src')
  }, {
    headers: {
      Authorization: token,
      'x-api-key': apiKey
    }
  })
    .then(function (response) {
      console.log(response.data);
      window.location.href = './profilUserV.html';
    })
    .catch(function (error) {
      console.error('Error:', error);
      window.location.href = '../../index.html';
    });
});
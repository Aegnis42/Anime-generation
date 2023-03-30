const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';

const token = localStorage.getItem('token');
if (!token) {
  window.location.href = '../../index.html';
}

const userNameInput = document.getElementById('userName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const descTextarea = document.getElementById("profilDesc");
const profilPictureElement = document.getElementById("profilPicture");

axios.get('https://afpatraining.snage.tech/profile', {
  headers: {
    Authorization: token,
    'x-api-key': apiKey
  }
})
  .then(function (response) {
    const userData = response.data.user;
    userNameInput.value = userData.username;
    emailInput.value = userData.email;
    descTextarea.value = userData.description;

    if (userData.profilePicture) {
      profilPictureElement.setAttribute('src', userData.profilePicture);
    } else {
      profilPictureElement.setAttribute('src', '../assets/image/rectangle1.png');
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
    window.location.href = '../../index.html';
  });

document.getElementById("save").addEventListener("click", function() {
    let data = {
      username: userNameInput.value,
      email: emailInput.value,
      description: descTextarea.value,
      profilePicture: profilPictureElement.getAttribute('src')
    };

    if (passwordInput.value) {
      const hashedPassword = CryptoJS.SHA256(passwordInput.value).toString();
      data.password = hashedPassword;
    }
    
  axios.put('https://afpatraining.snage.tech/profile', data, {
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
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';

const token = sessionStorage.getItem('token');
if (!token) {
  window.location.href = '../../index.html';
}

axios.get('https://afpatraining.snage.tech/profile', {
  headers: {
    Authorization: token,
    'x-api-key': apiKey
  }
})
  .then(function (response) {
    const userData = response.data.user;
    const userNameElement = document.getElementById("userName");
    const userEmailElement = document.getElementById("userEmail");
    const userDescElement = document.getElementById("userDesc");
    const profilPictureElement = document.getElementById("profilPicture");

    userNameElement.textContent = userData.username;
    userEmailElement.textContent = userData.email;
    userDescElement.textContent = userData.description;

    if (userData.profilePicture) {
      profilPictureElement.setAttribute('src', userData.profilePicture);
    } else {
      profilPictureElement.setAttribute('src', '../assets/image/rectangle1.png');
    }
    console.log(response.data)
    const modifiedButton = document.getElementById("modified");
    modifiedButton.addEventListener("click", function() {
        window.location.href = './profilUser.html';
    });
  })
  .catch(function (error) {
    console.error('Error:', error);
    window.location.href = '../../index.html';
  });
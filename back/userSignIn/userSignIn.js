const connectButton = document.getElementById("connect");
const rememberMeCheckbox = document.getElementById("rememberMe");
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';

connectButton.addEventListener("click", function() {
    const email = document.querySelector('input[type="text"][placeholder="E-mail"]').value;
    const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    axios.post('https://afpatraining.snage.tech/login', {
        email: email,
        password: hashedPassword
    }, {
        headers: {
            'x-api-key' : `${apiKey}`
        }
    })
    .then(function (response) {
        const token = response.data.token;
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
        window.location.href = 'statics/view/profilUserV.html';
    })
    .catch(function (error) {
        console.error('Error:', error);
        alert("Incorrect email or password.");
    });
});
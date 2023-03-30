const connectButton = document.getElementById("connect");
const rememberMeCheckbox = document.getElementById("rememberMe");
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';
const email = document.getElementById('email');
const emailStock = localStorage.getItem('email')

if (emailStock !== undefined){
    email.value=emailStock
}else{
    email.value = ""
}

connectButton.addEventListener("click", function() {
    
    const password = document.getElementById('password').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();

    axios.post('https://afpatraining.snage.tech/login', {
        email: email.value,
        password: hashedPassword
    }, {
        headers: {
            'x-api-key' : `${apiKey}`
        }
    })
    .then(function (response) {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('email', email.value);
        }
        sessionStorage.setItem('token', response.data.token)
        window.location.href = 'statics/view/profilUserV.html';
    })
    .catch(function (error) {
        console.error('Error:', error);
        alert("Incorrect email or password.");
    });
});
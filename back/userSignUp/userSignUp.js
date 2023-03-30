const connectButton = document.getElementById("connect");

connectButton.addEventListener("click", function() {

    const username = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MTksImV4cCI6MTY3OTQ3ODc3OX0.M4NjzvH6nnS1k9QTbMUAJ09nOTJcLswijwABb-sBmGQ';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!.?@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 10 characters long, contain at least one number, one special character, one lowercase letter, and one uppercase letter.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const cguCheckbox = document.getElementById("CGUCheckBox");
    if (!cguCheckbox.checked) {
        alert("Please accept the CGU.");
        return;
    }

    const hashedPassword = CryptoJS.SHA256(password).toString();

    axios.post('https://afpatraining.snage.tech/signup',{
        
        username,
        email,
        password: hashedPassword
    }, {
        headers: {
            'x-api-key' : `${apiKey}`
        }
    })
    .then(function (response) {
        console.log('Data received:', response.data);
        window.location.href = '../../index.html'
    
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
});
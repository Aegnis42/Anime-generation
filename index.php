<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="statics/css/index.css">
    <title>Anime generqtion | how time i watch</title>
    <meta name="description" content="Easily create a list of all the anime you've watched and keep track of your total watch time with our user-friendly website. Organize by genre, release year, or rating and receive personalized recommendations. Our platform automatically calculates your total watch time so you don't have to. Start tracking your anime viewing habits today and join our community of passionate fans.">
</head>
<body> 
    <div class="bLeft"></div>
    <div class="bRight"></div>
    <div class="container">
       
        <header>
            <img src="statics/assets/icone/logo.webp" alt="Logo.png">
            <h1>Anime Generation</h1>
            <h2>Choose your favorite</h2>
        </header>
        <main>
        <form>
            <input type="text" placeholder="E-mail" id="email">
            <input type="password" placeholder="Password" id="password">
            <p>Do you need to <a href=""><strong>reset your password ?</strong></a></p>
            <p>Not yet have an account?<a id="register" href="statics/view/register.php"><strong>Register yourself.</strong></a></p>
            <div>
                <input type="checkbox" name="Remember" id="rememberMe">
                <p id="remember">Remember me</p>
                <input id="connect" type="button" value="Connect" name="Connect">
            </div>
            <img src="statics/assets/image/beyond-the-boundary-anime-manga-desktop-wallpaper-anime-d7604f1bdf9ed37dd0b6035854f078031.webp" alt="girlleft" id="girlLeft">
            <img src="statics/assets/image/klipartz1.webp" alt="girlpoint" id="girlRight">
        </form>
       
    </main>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="back/userSignIn/userSignIn.js"></script> 
</body>

</html>
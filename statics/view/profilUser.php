<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/profilUser/profilUser.css">
    <script src="https://kit.fontawesome.com/980e2b268a.js" crossorigin="anonymous"></script>
    <title>Anime generqtion | Sign up</title>
    <meta name="description" content="Easily create a list of all the anime you've watched and keep track of your total watch time with our user-friendly website. Organize by genre, release year, or rating and receive personalized recommendations. Our platform automatically calculates your total watch time so you don't have to. Start tracking your anime viewing habits today and join our community of passionate fans.">
</head>
<body> 
    <div class="bLeft"></div>
    <div class="bRight"></div>
    <div class="container">
       
        <header>
            <img src="../assets/icone/logo.webp" alt="Logo.png">
        </header>
        <main>
        <form >
            <div>
                <div>   
                    <input type="text" placeholder="User-name" id="userName">
                    <input type="password" placeholder="Password" id="password">
                </div>
                <img src="../assets/image/rectangle1.png" alt="" id="profilPicture" onclick="changePicture()">
            </div>
            <input type="text" placeholder="email" id="email">
            <textarea id="profilDesc" cols="30" rows="10"></textarea>
            <input id="save" type="button" value="save" name="save">
            <img src="../assets/image/imgbin_anime-drawing-cartoon-comics-png1.png" alt="girlleft" id="girlLeft">
            <img src="../assets/image/image_2023-03-23_005217778-removebg-preview1.png" alt="girlpoint" id="girlRight">
            
        </form>
       
    </main>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="../js/picturChange.js"></script>
    <script src="../../back/userProfil/userProfil.js"></script>
</body>

</html>
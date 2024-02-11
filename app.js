var audio = new Audio('ANKHIYAN MILAO.MP3'); // Replace 'your-music-file.mp3' with the path to your music file

        function playMusic() {
            if (audio.paused) {
                audio.play();
                document.querySelector('.icon-container i').classList.remove('fa-play');
                document.querySelector('.icon-container i').classList.add('fa-pause');
            } else {
                audio.pause();
                audio.currentTime = 0;
                document.querySelector('.icon-container i').classList.remove('fa-pause');
                document.querySelector('.icon-container i').classList.add('fa-play');
            }
        };
document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementsById('myIcon');
        
            // Function to change the color of the icon on click
            
            function changeHeartColor() {
                icon.style.color = 'red';
            }
        
            // Add click event listener to the icon
icon.addEventListener('click', function () 
 {
  changeHeartColor();
 });
});

      
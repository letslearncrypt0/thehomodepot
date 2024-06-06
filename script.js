function playMusic() {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    
    audio.play().then(() => {
        playButton.style.display = 'none';
    }).catch((error) => {
        console.error('Error playing audio:', error);
        playButton.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-music');
    playButton.style.display = 'block';
});

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

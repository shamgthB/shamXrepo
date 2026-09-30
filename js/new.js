document.body.addEventListener('click', function() {
    var audio = document.getElementById("myAudio");
    if (audio) {
        audio.play();
        alert("Welcome! Audio chal raha hai.");
    } else {
        alert("Audio file nahi mili. HTML check karo.");
    }
});
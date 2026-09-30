let currentAudio = null;

const audioButtons = document.querySelectorAll('.audio-btn');

audioButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 

        if (currentAudio) {
            currentAudio.pause(); 
            currentAudio.currentTime = 0; 
        }

        const filePath = this.getAttribute('data-audio');
        currentAudio = new Audio(filePath); 
        currentAudio.play(); 
    });
});
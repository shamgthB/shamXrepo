// Ek variable banaya jo yaad rakhega ki kaunsa audio chal raha hai
let currentAudio = null;

// Saare Audio Buttons ke liye code
const audioButtons = document.querySelectorAll('.audio-btn');

audioButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Purana background audio rok dega

        // 1. Agar koi audio pehle se chal raha hai, toh use pause karo
        if (currentAudio) {
            currentAudio.pause(); 
            currentAudio.currentTime = 0; // Audio ko shuru se (0 second) par le aao
        }

        // 2. Ab naya audio chalao
        const filePath = this.getAttribute('data-audio');
        currentAudio = new Audio(filePath); // Naya audio object banao
        currentAudio.play(); // Aur use play karo
    });
});
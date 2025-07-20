document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slide-track');
    if (track && track.children.length > 1) {
        const slides = Array.from(track.children);
        let currentIndex = 0;

        // Clone slides for seamless loop
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        function nextSlide() {
            currentIndex++;
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Reset to the beginning without animation for a seamless loop
            if (currentIndex >= slides.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    track.style.transform = `translateX(0)`;
                }, 500); // Should match the transition duration
            }
        }
        
        setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
}); 
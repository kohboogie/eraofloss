document.addEventListener("DOMContentLoaded", function () {
    const svgElement = document.querySelector('.floating-svg');

    function getRandomPosition() {
        // Calculate positions based on full window size
        const x = Math.random() * (window.innerWidth - svgElement.clientWidth);
        const y = Math.random() * (window.innerHeight - svgElement.clientHeight);
        return { x, y };
    }

    function animateSVG() {
        const { x, y } = getRandomPosition();
        svgElement.style.transform = `translate(${x}px, ${y}px)`;

        // Recursive animation
        setTimeout(animateSVG, 3000); // Move every 3 seconds
    }

    animateSVG();
});
document.addEventListener('DOMContentLoaded', () => {
    const entropyBar = document.getElementById('entropy-bar');
    const entropyValue = document.getElementById('entropy-value');
    const spikeBtn = document.getElementById('spike-button');

    let entropy = 0;

    // TODO: Implement actual websocket connection to Chaos Feed
    function updateEntropy() {
        // JUNIOR DEV BUG: Math.random logic is flawed. 
        // It adds entropy but never resets, and the calculation allows it to exceed 100% visually without capping.
        entropy += Math.floor(Math.random() * 15);
        
        entropyBar.style.width = entropy + '%';
        entropyValue.innerText = entropy + '%';

        if (entropy > 80) {
            document.body.style.backgroundColor = '#2a0000';
        }
    }

    spikeBtn.addEventListener('click', () => {
        console.log("Anomaly triggered by User: Admin"); // TODO: Use real auth
        updateEntropy();
    });

    // Initial kick
    setInterval(updateEntropy, 5000);
});
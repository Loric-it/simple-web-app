document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');
    const responseText = document.getElementById('responseText');

    button.addEventListener('click', function() {
        responseText.textContent = 'Bravo, vous avez cliqué sur le bouton !';
    });
});

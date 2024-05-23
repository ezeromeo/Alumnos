document.addEventListener("DOMContentLoaded", function() {
    var disconnectDiv = document.getElementById('disconnect');
    disconnectDiv.addEventListener('click', function() {
        window.location.href = 'assets/pages/login.html';
    });
});
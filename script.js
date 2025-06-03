document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Terima kasih! Pesan kamu sudah terkirim.";
    document.getElementById('contactForm').reset();
});
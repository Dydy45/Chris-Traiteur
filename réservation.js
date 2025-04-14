// Validation formulaire de réservation
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des données
    const formData = new FormData(this);
    
    // Ici, ajouter l'envoi AJAX ou traitement
    alert('Demande envoyée! Nous vous confirmons sous 24h.');
    this.reset();
    
    // Réinitialiser les étapes
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
});
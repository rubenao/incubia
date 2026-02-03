import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#waitlistForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      console.log('Form submitted:', data);
      
      // Here you would typically send data to your backend
      // For now, let's simulate a success state
      
      const button = form.querySelector('button');
      const originalText = button.innerText;
      
      button.innerText = '¡Enviado!';
      button.style.backgroundColor = 'var(--secondary-gradient)'; // Greenish
      button.disabled = true;
      
      alert(`¡Gracias ${data.name}! Hemos recibido tu solicitud. Te contactaremos pronto al ${data.phone}.`);
      
      setTimeout(() => {
        form.reset();
        button.innerText = originalText;
        button.disabled = false;
        button.style.backgroundColor = ''; 
      }, 3000);
    });
  }

  // Smooth scroll for anchor links (if browser doesn't support CSS smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Interactive Play Button
  const playBtn = document.querySelector('.play-button');
  if(playBtn) {
    playBtn.addEventListener('click', () => {
        alert("El video demo estará disponible pronto.");
    })
  }
});

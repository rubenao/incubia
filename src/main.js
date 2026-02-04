import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#waitlistForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const button = form.querySelector('button');
      const originalText = button.innerText;

      // Loading state
      button.innerText = 'Enviando...';
      button.disabled = true;

      try {
        const response = await fetch('https://kbk2ycy7.rsrv.host/webhook/9ebb088a-cdba-46c0-902e-9c4df67363cb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Success state
          button.innerText = '¡Enviado!';
          button.style.background = 'var(--secondary-gradient)';

          alert(`¡Gracias ${data.name}! Hemos recibido tu información. Nos comunicaremos contigo a la brevedad.`);

          form.reset();

          setTimeout(() => {
            button.innerText = originalText;
            button.disabled = false;
            button.style.background = '';
          }, 3000);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
        button.innerText = originalText;
        button.disabled = false;
      }
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
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert("El video demo estará disponible pronto.");
    })
  }
});

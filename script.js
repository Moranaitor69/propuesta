document.getElementById('verPregunta').addEventListener('click', () => {

  document.getElementById('verPregunta').style.display = 'none';
  document.getElementById('pregunta').style.display = 'block';
});

let intentos = 0;

function moverBoton() {
  const btnNo = document.getElementById('btnNo');
  const confirmacion = document.getElementById('confirmacion');


  const maxX = 150;
  const maxY = 100;
  const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
  const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

  btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
  confirmacion.style.display = 'block';
}

function responder(respuesta) {
  if (respuesta === 'sí') {

   Swal.fire({
  html: `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h2 style="color: #d63384; margin-bottom: 10px;">¡ME ENCANTASSSS! 🌷</h2>
       <h3 style="color: #d63384; margin-bottom: 10px;">¡MI Estrella! ⭐</h3>
      <p style="color: #555;">Gracias por aceptar ser mi novia jsjsjsjs💖</p>
      <img src="imagen/AOHARUDIE.png" alt="TANIME" style="width: 100%; max-width: 300px; border-radius: 12px; margin-top: 15px;" />
    </div>
  `,
  showConfirmButton: true,
  confirmButtonText: '💞 Aww',
  background: '#fff0f5',
  backdrop: `
    rgba(0,0,0,0.4)
    url("https://i.gifer.com/7efs.gif")
    center
    no-repeat
  `,
  customClass: {
    popup: 'alerta-romantica'
  }
}).then((result) => {
  if (result.isConfirmed) {
    
    
    window.open('https://www.youtube.com/watch?v=uTBfN9KMfPk&list=RDuTBfN9KMfPk&start_radio=1', '_blank');
  }
});


    // 🌸 Iniciar lluvia de flores de cerezo
    lanzarLluviaFlores();
  }
}





const carta = document.getElementById('carta');
const cartaContenedor = document.getElementById('cartaContenedor');
const tarjetaContenido = document.getElementById('tarjetaContenido');

carta.addEventListener('click', () => {
  carta.classList.add('abierta');
  setTimeout(() => {
    cartaContenedor.style.display = 'none';
    tarjetaContenido.style.display = 'block';
    tarjetaContenido.classList.add('mostrar');
  }, 1000); // Espera a que termine la animación de giro
});



function lanzarFlores() {
  const cantidad = 30;

  for (let i = 0; i < cantidad; i++) {
    const flor = document.createElement('div');
    flor.classList.add('flor');
    
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.animationDuration = (4 + Math.random() * 3) + 's';
    flor.style.width = flor.style.height = 30 + Math.random() * 15 + 'px';

    document.body.appendChild(flor);

    setTimeout(() => {
      flor.remove();
    }, 8000); // para que desaparezca después
  }
}

function crearFlorEmoji() {
  const flor = document.createElement('div');
  flor.classList.add('flor');
  flor.textContent = '🌸';
  flor.style.left = `${Math.random() * 100}vw`;
  flor.style.fontSize = `${20 + Math.random() * 20}px`;
  flor.style.animationDuration = `${4 + Math.random() * 3}s`;
  document.body.appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 7000);
}

function lanzarLluviaFlores() {
  let cantidad = 0;
  const maxFlores = 100;
  const intervalo = setInterval(() => {
    crearFlorEmoji();
    cantidad++;
    if (cantidad >= maxFlores) {
      clearInterval(intervalo);
    }
  }, 150); // 150ms entre flores
}

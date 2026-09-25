const { useState } = React;

const epocasData = [
  {
    id: '1',
    nombre: 'Colonial',
    titulo: 'CRONOVISOR',
    subtitulo: 'ÉPOCA COLONIAL',
    descripcion: 'Explora la arquitectura y costumbres durante los años de la colonia.',
    videoSrc: '../video4.mp4'
  },
  {
    id: '2',
    nombre: 'Independencia',
    titulo: 'CRONOVISOR',
    subtitulo: 'INDEPENDENCIA',
    descripcion: 'Revive el camino histórico hacia la conformación de la república.',
    videoSrc: '../video4.mp4'
  },
  {
    id: '3',
    nombre: 'Contemporánea',
    titulo: 'CRONOVISOR',
    subtitulo: 'VENEZUELA ACTUAL',
    descripcion: 'Un recorrido visual por el desarrollo moderno e industrial.',
    videoSrc: '../Super mario 64 dancing meme.mp4'
  }
];

// Módulo 1: Pantalla Inicial (Video de fondo)
function PantallaInicial({ epocaActual }) {
  if (!epocaActual) {
    return <div className="showcase-cargando"><p>Cargando datos...</p></div>;
  }

  return (
    <section className="showcase">
      <header>
        <h2 className="logo">CRONOVISOR</h2>
        {/* El menú de texto con las épocas ha sido removido de aquí */}
      </header>

      <video
        key={epocaActual.id}
        src={epocaActual.videoSrc}
        muted
        loop
        autoPlay
      ></video>

      <div className="overlay"></div>

      <div className="text">
        <h2>{epocaActual.titulo}</h2>
        <h3>{epocaActual.subtitulo}</h3>
        <p>{epocaActual.descripcion}</p>
        <a href="#seccion-mapa">Explorar Mapa</a>
      </div>

      <ul className="social">
        <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" /></a></li>
        <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" /></a></li>
        <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="Instagram" /></a></li>
      </ul>
    </section>
  );
}







// Ejemplo de cómo estructurar tu componente del reloj interactivo
function RelojFlotante({ epocas, alCambiarEpoca }) {
  const [expandido, setExpandido] = React.useState(false);

  return (
    <div className={`reloj-flotante ${expandido ? 'expandido' : ''}`}>
      {/* Icono del reloj que al hacer clic se expande */}
      <div className="icono-reloj" onClick={() => setExpandido(!expandido)}>
        ⏰ {/* O una etiqueta img con tu icono de reloj */}
      </div>

      {/* Contenido interactivo al expandirse (agujas, opciones o selección por hora) */}
      {expandido && (
        <div className="panel-agujas-reloj">
          <p>Mueve las agujas o selecciona la época:</p>
          {epocas.map((epoca) => (
            <button 
              key={epoca.id} 
              onClick={() => {
                alCambiarEpoca(epoca); // <--- AQUÍ SE CONECTA Y CAMBIA TODO ARRIBA
                setExpandido(false);  // Cierra el reloj al elegir
              }}
            >
              {epoca.nombre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



//modulo 1.5 leyenda
function Leyenda({epocaActual}) {
  return (
    <div className="seccion-contenido">
      <p>Estás viendo información geográfica correspondiente a: <strong>{epocaActual.subtitulo}</strong></p>
      <h2>Referencias de la region</h2>
      <div className="seccion-lista">
        <ul>
          <li> {/*nombre de la region por epoca introducido por la epoca*/} </li>
        </ul>
      </div>
    </div>
  );
}



// Módulo 2: Sección del Mapa (Interactúa con la época actual)
function Mapa({ epocaActual }) {
  return (
    <div className="seccion-contenido">
      <h2>Mapa Interactivo</h2>
      {/* <p>Estás viendo información geográfica correspondiente a: <strong>{epocaActual.subtitulo}</strong></p> */}
      {/* Aquí después colocarás tu mapa interactivo */}
    </div>
  );
}

// Módulo 3: Sección de Curiosidades o Detalles
function Curiosidad({ epocaActual }) {
  return (
    <div className="seccion-contenido">
      <h2>Curiosidades Históricas</h2>
      <p>Datos clave y eventos memorables de la etapa: <strong>{epocaActual.nombre}</strong></p>
    </div>
  );
}

// modulo 4: seccion final

function Finale({epocaActual}) {
  return(
  <div className="seccion-contenido">
    <h2>Conclusion</h2>
    <p>loreipsum</p>
  </div>
  )
}

// Función Orquestadora Principal
function RenderizadorAplicacion() {
  const [epocaActual, setEpocaActual] = useState(epocasData[0]);

  return (
    <div className="cronovisor-app" style={{ position: 'relative' }}>
      
      {/* El reloj flotante vive aquí afuera para estar visible en toda la página */}
      <RelojFlotante 
        epocas={epocasData} 
        alCambiarEpoca={setEpocaActual} 
      />

      {/* Módulo 1: Pantalla Inicial */}
      <PantallaInicial epocaActual={epocaActual} />

      {/* Modulo 1.5: leyenda */}
      <section id="seccion-leyenda" className="seccion-vertical">
        <Leyenda epocaActual={epocaActual} />
      </section>

      {/* Módulo 2: Mapa */}
      <section id="seccion-mapa" className="seccion-vertical">
        <Mapa epocaActual={epocaActual} />
      </section>

      {/* Módulo 3: Curiosidades */}
      <section id="seccion-curiosidades" className="seccion-vertical">
        <Curiosidad epocaActual={epocaActual} />
      </section>

      {/* Modulo 4: finale */}
      <section id="seccion-finale" className="seccion-vertical">
        <Finale epocaActual={epocaActual} />
      </section>
    </div>
  );
}
// Renderizado en el HTML
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<RenderizadorAplicacion />);
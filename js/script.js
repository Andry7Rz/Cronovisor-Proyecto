

function Portada() {
  return (
    <div>
      <h1>Bienvenido a Cronovisor</h1>
      <p>Explora la historia y los eventos del pasado con nuestro cronovisor interactivo.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(<Portada />);
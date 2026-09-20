document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById('tooltip');
    const slider = document.getElementById('decade-slider');
    const sidebar = document.getElementById('sidebar');

    // 1. Memoria inicial
    const era = '1';
    document.body.className = 'epoca-' + era;


    // 2. Control de Botones de Época
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const num = this.getAttribute('data-step');
            document.body.className = 'epoca-' + num;
            localStorage.setItem('epocaActual', num);
            if (slider) { slider.value = num; slider.dispatchEvent(new Event('input')); }
        });
    });


    // 4. Menú Lateral (Sidebar)
    document.getElementById('menu-toggle').addEventListener('click', function() {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        this.classList.toggle('open');
    });
    document.querySelectorAll('.sidebar a').forEach(lnk => {
        lnk.addEventListener('click', () => {
            sidebar.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // 5. Redirección Automática con Fetch (Modificado para Desarrollo)
    document.querySelectorAll('path').forEach(estado => {
        estado.addEventListener('click', function() {
            const eraAct = document.body.className || 'epoca-1';
            const prefijos = { 'epoca-1': 'indigena-', 'epoca-2': 'colonia-', 'epoca-3': 'republica-' };
            const prefijo = prefijos[eraAct];
            
            const archivo = prefijo ? Array.from(this.classList).find(c => c.startsWith(prefijo)) : this.id;

            if (archivo) {
                const ruta = `articulos/${eraAct}/${archivo}.html`;
                
                fetch(ruta, { method: 'HEAD' })
                    .then(res => {
                        if (res.ok) {
                            // Si el archivo existe, viaja hacia él
                            window.location.href = ruta;
                        } else {
                            // Si no existe, te avisa el nombre exacto que falta
                            alert(`Falta crear cuartilla. \nNombre: ${archivo}.html \nRuta esperada: ${ruta}`);
                        }
                    })
                    .catch(() => {
                        // Por si falla la petición local
                        alert(`Error al buscar la cuartilla. \nRevisa si existe el archivo: ${archivo}.html`);
                    });
            }
        });
    });
});
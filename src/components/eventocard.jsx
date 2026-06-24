import './eventocard.css';

export function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas }) {
  // Determinar estilo y etiqueta según el tipo
  const estilosPorTipo = {
    Concierto: {
      clase: 'evento-concierto',
      icono: '🎵',
      etiqueta: 'CONCIERTO'
    },
    Teatro: {
      clase: 'evento-teatro',
      icono: '🎭',
      etiqueta: 'TEATRO'
    },
    Exposición: {
      clase: 'evento-exposicion',
      icono: '🎨',
      etiqueta: 'EXPOSICIÓN'
    }
  };

  const estilos = estilosPorTipo[tipo] || estilosPorTipo.Concierto;

  return (
    <div className={`evento-card ${estilos.clase}`}>
      <div className="evento-etiqueta">
        <span className="evento-icono">{estilos.icono}</span>
        <span className="evento-tipo">{estilos.etiqueta}</span>
      </div>

      <div className="evento-contenido">
        <h3 className="evento-nombre">{nombre}</h3>
        
        <div className="evento-detalles">
          <p className="evento-lugar">
            <strong>📍 Lugar:</strong> {lugar}
          </p>
          
          {duracion > 0 && (
            <p className="evento-duracion">
              <strong>⏱️ Duración:</strong> {duracion} minutos
            </p>
          )}
          
          <p className="evento-descripcion">{descripcion}</p>
          
          <div className="evento-fechas">
            <strong>📅 Fechas:</strong>
            <ul>
              {fechas.map((fecha, idx) => (
                <li key={idx}>{fecha}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

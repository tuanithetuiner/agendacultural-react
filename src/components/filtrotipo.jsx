import './filtrotipo.css';

export function FiltroTipo({ tipoSeleccionado, onTipoChange }) {
  const tipos = ['Todos', 'Concierto', 'Teatro', 'Exposición'];

  return (
    <div className="filtro-tipo-container">
      <h3>Filtrar por tipo:</h3>
      <div className="filtro-botones">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            className={`filtro-btn ${tipoSeleccionado === tipo ? 'activo' : ''}`}
            onClick={() => onTipoChange(tipo)}
          >
            {tipo === 'Todos' && '🎪'}
            {tipo === 'Concierto' && '🎵'}
            {tipo === 'Teatro' && '🎭'}
            {tipo === 'Exposición' && '🎨'}
            <span> {tipo}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

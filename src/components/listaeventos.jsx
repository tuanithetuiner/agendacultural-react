import { EventoCard } from './eventocard';

export function ListaEventos({ eventos }) {
  return (
    <div className="lista-eventos-container">
      <h2>Eventos Disponibles</h2>
      <div className="eventos-grid">
        {eventos.map((evento) => (
          <EventoCard
            key={evento.id}
            nombre={evento.nombre}
            lugar={evento.lugar}
            duracion={evento.duracion}
            tipo={evento.tipo}
            descripcion={evento.descripcion}
            fechas={evento.fechas}
            esGratuito={evento.esGratuito}
          />
        ))}
      </div>
    </div>
  );
}

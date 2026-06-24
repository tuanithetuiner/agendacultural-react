import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { eventos } from './data/eventos'
import { ListaEventos } from './components/listaeventos'
import { FiltroTipo } from './components/filtrotipo'
import './App.css'

console.log('Eventos cargados:', eventos)

function App() {
  const [count, setCount] = useState(0)
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  // Normalizar y validar búsqueda: recortar espacios y limitar a 100 caracteres
  const busquedaNormalizada = busqueda.trim().slice(0, 100)

  // Manejar cambio en búsqueda con validación
  const handleBusquedaChange = (e) => {
    const valor = e.target.value
    // Solo permitir si no excede 100 caracteres
    if (valor.length <= 100) {
      setBusqueda(valor)
    }
  }

  // Filtrar eventos según tipo y búsqueda por nombre
  const eventosFiltrados = eventos.filter(evento => {
    const cumpleTipo = tipoSeleccionado === 'Todos' || evento.tipo === tipoSeleccionado
    const cumpleBusqueda = evento.nombre.toLowerCase().includes(busquedaNormalizada.toLowerCase())
    return cumpleTipo && cumpleBusqueda
  })

  // Contar eventos gratuitos en los filtrados
  const eventosGratuitos = eventosFiltrados.filter(evento => evento.esGratuito).length

  console.log(`Filtros aplicados - Tipo: ${tipoSeleccionado}, Búsqueda: "${busquedaNormalizada}" - Eventos encontrados: ${eventosFiltrados.length} (Gratuitos: ${eventosGratuitos})`)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Agenda Cultural</h1>
          <p>
            Explora los eventos disponibles
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="eventos-section">
        <div className="busqueda-container">
          <input
            type="text"
            placeholder="🔍 Buscar evento por nombre..."
            value={busqueda}
            onChange={handleBusquedaChange}
            maxLength="100"
            className="input-busqueda"
          />
          {busqueda.length > 0 && (
            <span className="contador-caracteres">{busqueda.length}/100</span>
          )}
        </div>
        <FiltroTipo tipoSeleccionado={tipoSeleccionado} onTipoChange={setTipoSeleccionado} />
        
        {eventosFiltrados.length > 0 && (
          <div className="contador-gratuitos">
            <span>🎟️ <strong>{eventosGratuitos}</strong> de <strong>{eventosFiltrados.length}</strong> eventos son gratuitos</span>
          </div>
        )}
        
        {eventosFiltrados.length > 0 ? (
          <ListaEventos eventos={eventosFiltrados} />
        ) : (
          <div className="sin-resultados">
            <p>😔 No hay eventos que coincidan con los filtros seleccionados</p>
            <p className="sin-resultados-detalle">
              Tipo: <strong>{tipoSeleccionado}</strong> | Búsqueda: <strong>"{busquedaNormalizada}"</strong>
            </p>
          </div>
        )}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

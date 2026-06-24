import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { eventos } from './data/eventos'
import { EventoCard } from './components/eventocard'
import './App.css'

console.log('Eventos cargados:', eventos)

function App() {
  const [count, setCount] = useState(0)

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
            />
          ))}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

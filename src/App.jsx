import { useState } from 'react'
import './style.css'
import { Renderer } from './Renderer.jsx'
import FileUpload from './components/FileUpload'
function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  // const [mousePosX, mousePosY] = useState(0)


  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">Head Tracker</div>

          <ul className="nav-links">
            <li><a href="#live">Live Monitoring</a></li>
            <li><a href="#metrics">Data Metrics</a></li>
            <li><a href="#details">System Details</a></li>
            <li><a href="#limitations">Limitations</a></li>
          </ul>

          <button className="menu-button" onClick={() => setShowSidebar(true)}>
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`overlay ${showSidebar ? 'show' : ''}`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-top">
          <h2>Menu</h2>
          <button className="close-button" onClick={() => setShowSidebar(false)}>
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li>
            <a href="#live" onClick={() => setShowSidebar(false)}>Live Monitoring</a>
          </li>
          <li><a href="#metrics" onClick={() => setShowSidebar(false)}>Data Metrics</a></li>
          <li><a href="#details" onClick={() => setShowSidebar(false)}>System Details</a></li>
          <li><a href="#limitations" onClick={() => setShowSidebar(false)}>Limitations</a></li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Head Tracker UI</h1>

        <section id="live" className="section-card">
          <h2>Live Monitoring</h2>
          <p>Real-time head position and movement status will go here.</p>
          <div id="canvas-container">
              <Renderer />
            </div>
        </section>

        <section id="metrics" className="section-card">
          <h2>Data Metrics</h2>
          <p>Upload recorded sensor data to begin analysis.</p>
          <FileUpload />
        </section>

        <section id="details" className="section-card">
          <h2>System Details</h2>
          <p>Camera, sensor, and processing details will go here.</p>
        </section>

        <section id="limitations" className="section-card">
          <h2>Limitations</h2>
          <p>Known constraints and future improvements will go here.</p>
        </section>
      </main>
    </>
  )
}

export default App
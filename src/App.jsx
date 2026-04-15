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
          <div className="logo">Head Impact Telemetry System</div>

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
          <h2>Live Monitoring (In Progress)</h2>
          <p>Real-time motion tracking</p>
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
          <p className="section-intro">
            The Head Impact Telemetry System combines embedded hardware and a web-based
            analysis platform to capture, process, and visualize head motion data.
          </p>

          <div className="detail-group">
            <h3>Hardware Components</h3>
            <ul className="info-list">
              <li>Three-axis accelerometers mounted on the head harness</li>
              <li>STM32L452RCT6 microcontroller on a custom PCB</li>
              <li>MicroSD card storage for recorded sensor data</li>
              <li>3.7V 350mAh LiPo battery</li>
              <li>USB 2.0 MicroUSB for data transfer</li>
              <li>Custom flexible PCB connecting sensors to the MCU</li>
              <li>3D printed waist-mounted enclosure</li>
            </ul>
          </div>

          <div className="detail-group">
            <h3>Data Collection</h3>
            <ul className="info-list">
              <li>Up to 800 samples per second</li>
              <li>Each cycle stores accelerometer readings and timestamp data</li>
              <li>Data is written in 512-byte blocks to MicroSD</li>
              <li>SPI communication at 5 MHz for sensors and 24 MHz for SD card</li>
            </ul>
          </div>

          <div className="detail-group">
            <h3>Data Processing</h3>
            <ul className="info-list">
              <li>Binary sensor data is converted into structured formats</li>
              <li>Kinematic analysis separates translational and rotational motion</li>
              <li>Used to study force, torque, and motion trends</li>
            </ul>
          </div>

          <div className="detail-group">
            <h3>Web Application</h3>
            <ul className="info-list">
              <li>Built using React</li>
              <li>Browser-based platform with no installation required</li>
              <li>Supports sensor data upload and parsing</li>
              <li>Displays time-series motion graphs and impact highlights</li>
              <li>Exports structured data in JSON format</li>
              <li>Includes 3D motion visualization using Three.js</li>
            </ul>
          </div>

          <div className="detail-group">
            <h3>Housing Design</h3>
            <ul className="info-list">
              <li>Designed in Tinkercad</li>
              <li>Approximate enclosure size: 56 × 97 × 27 mm</li>
              <li>Compact waist-mounted form for stability and wearability</li>
            </ul>
          </div>

        </section>

        <section id="limitations" className="section-card">
        <h2>Limitations</h2>
        <p className="section-intro">
          The current system is functional, but several engineering limitations are
          still being evaluated as testing continues.
        </p>

        <ul className="info-list limitation-list">
          <li>
            Performance is still being refined through testing and validation.
          </li>
          <li>
            Sensor accuracy depends on calibration, placement, and consistent mounting.
          </li>
          <li>
            High-frequency accelerometer data can introduce noise during complex motion.
          </li>
          <li>
            Kinematic separation of translational and rotational motion is still being refined.
          </li>
          <li>
            The current workflow is stronger in post-processing than full real-time analysis.
          </li>
          <li>
            The 3D visualization is a simplified model and cannot perfectly recreate all real-world movement.
          </li>
          <li>
            Long-term durability and repeated-use performance are still being evaluated.
          </li>
        </ul>
                
          
        </section>
        <footer className="team-footer">
          <h2>Project Team</h2>

          <ul className="team-list">
            <li>Alyssa Silberman — Research & Mechanical Housing</li>
            <li>
              <a
                className="my-linkedin"
                href="https://www.linkedin.com/in/eva-batdorj-12213332a"
                target="_blank"
                rel="noreferrer"
              >
                Eva Batdorj
              </a>
              {" "}— Full-Stack Development, Data Processing & Visualization
            </li>
            <li>Riley McHale — Mechanical Housing</li>

            <li>Thomas Connelly — Hardware & Firmware</li>
            
            
          </ul>
        </footer>
      </main>
    </>
  )
}

export default App
import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'

console.log("Hi if you notice a bug please contact me nakshatragautam313@gmail.com")


const isMobile = () => {
  return ((window.innerWidth <= 1000) && (window.innerHeight <= 800));
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
  <StrictMode>
    <Canvas
      camera={{
        fov: isMobile() ? fovForMobile : fovForPc,
        near: 0.1,
        far: 200,
        position: [52, 7, 12],
      }}
    >
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>

      {/*<Perf position="top-left" />*/}
    </Canvas>

    <Analytics />
    <div style={{ display: "none" }}>
      <section aria-hidden="true">
        <h1>Nakshatra Gautam - Developer</h1>
        <h2>Computer Science Student at Nirma University</h2>
        <h2>Full-Stack Developer & AI Enthusiast</h2>
        <h2>Specialized in scalable software solutions</h2>
      </section>
      <section aria-hidden="true">
        <h2>Skills and Expertise</h2>
        <ul>
          <li>React.js / Next.js Developer</li>
          <li>Python / C++ Developer</li>
          <li>Machine Learning / NLP</li>
          <li>Full-Stack Web Development</li>
          <li>Web3 & Smart Contracts</li>
        </ul>
      </section>
      <section aria-hidden="true">
        <p>
          Welcome to the 3D portfolio of Nakshatra Gautam. This immersive portfolio has
          been created using React Three Fiber. Explore innovative web experiences
          that blend software engineering, AI, and Web3 technologies.
        </p>
      </section>
      <noscript>
        <p>
          This 3D portfolio of Nakshatra Gautam showcases creative web development using
          React Three Fiber. Please enable JavaScript to explore
          the immersive experience.
        </p>
      </noscript>
    </div>



  </StrictMode>



)
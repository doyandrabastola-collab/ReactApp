import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      {/* Component hint: This navbar can become a Navbar component later. */}
      <Header/>

      <main className="main-content">
        {/* Component hint: This hero section can become a Hero component later. */}
    <Hero/>

        {/* Component hint: This feature section can become a Features component later. */}
       <Features/>
      </main>

      {/* Component hint: This footer can become a Footer component later. */}
      <Footer/>
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Products from './components/Products'
import Prevention from './components/Prevention'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white font-jakarta text-carbon-900 selection:bg-coral-100 selection:text-coral-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Products />
        <Prevention />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

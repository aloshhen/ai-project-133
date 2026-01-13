import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navigation />
      <Hero />
      <BentoGrid />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  )
}
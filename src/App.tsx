import { Header } from './componentes/header'
import { HeroSection } from './componentes/sections/hero-section'

function App() {

  return (
    <div className=' w-[90vw]  h-screen'>
      <Header />
      <main>
        <HeroSection />
      </main>
      <footer></footer>
    </div>
  )
};

export default App

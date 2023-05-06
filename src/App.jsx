
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'

const app = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default app
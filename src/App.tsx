import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/events'
import Bureau from './components/bureau'


const App = () => {
  return(
    <div>
      <Navbar/>
      <section id="Home">
        <Hero/>

      </section>
      <section id="évènements">
        <Events/>

      </section>
      <section id="bureau">
        <Bureau/>

      </section>

    </div>
  )
}

export default App

import React from 'react'
import Home from './Home.js'
import Contact from './Components/ContactUs/Contact.js'
import About from './Components/About/About.js'
import Services from './Components/Services/Services.js'
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App

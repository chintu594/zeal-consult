import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Components/common/Header/Header'
import Router from './Root/Router'
import Footer from './Components/common/Footer/Footer'
import ScrollToTop from './Components/common/ScrollToTop'
const App = () => {

  return (
    <HashRouter basename="/zeal-consult">
      <ScrollToTop />
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  )
}

export default App
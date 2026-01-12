import React from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/common/Header/Header'
import Router from './Root/Router'
import Footer from './Components/common/Footer/Footer'
import ScrollToTop from './Components/common/ScrollToTop'
const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
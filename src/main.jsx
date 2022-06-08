import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from '@/components/MainContainer'
import Home from '@/pages/Home'
import '@/assets/styles/tailwind.css'
import Navbar from '@/components/Navbar'
import Footer from '@/pages/Home/components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Navbar/>
      <Home />
    </Container>
    <Footer/>
  </React.StrictMode>
)

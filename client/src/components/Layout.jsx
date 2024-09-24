import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import ParticlesComponent from './particles'

import '../index.css'

const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    
      <ParticlesComponent id='particles'/>
    </>
  )
}

export default Layout
import React from 'react'
import { Header } from './Partials/Header'
import { Footer } from './Partials/Footer'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
        <Header/>
        </header>
       <main className='main'>
      {children}
       </main>
     <footer className='footer'>
     <Footer/>
     </footer>
    </div>
   
  )
}

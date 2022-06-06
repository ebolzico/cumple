import foqui from './foqui.jpeg';
import './App.css';
import {useState} from 'react'
import React from 'react';
import {NavLink} from 'react-router-dom'

const Cumple = () => {

  const [options, setOptions] = useState('normal')

  const handleOptions = () => {
    setOptions('show')
  }

  return(
    <div className="Cumple">
        <header className="Cumple-header">
          <p className="text">DALE LOQUITA VENITE AL CUMPLEEEEEEEEE</p>
          {/* <p class="text">Porque cuando pisas mi casa, estas con Dios</p> */}
          <img src={foqui} className="Cumple-logo" alt="logo" />
          {
            options === 'show' ?
              <div className='options'>
                <NavLink to="/cartelito" className="option">
                  <button className="box">SI</button>
                </NavLink>
                <NavLink to="/cartelito" className="option">
                  <button className="box">OBVIO QUE SI</button> 
                </NavLink>
              </div>
            :
              <button onClick={handleOptions} className="btn"><p className='text'>Apreta aca para decidirte</p></button>
          }
        </header>
      </div>
  )
}

export default Cumple
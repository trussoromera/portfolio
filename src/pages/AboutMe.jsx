import { Button } from '@mui/material'
import React from 'react'
import image from '../assets/profilePic.jpg'
import document from '../assets/doc/Tomas_Russo_Romera_CV.pdf'
import Network from '../components/Network'
import { networks } from '../../data/projects'


const AboutMe = () => {
  return (
    <div className='about-container'>

      <div className='about-image-container'>
        <div className='about-image'>
          <img src={image}  />
        </div>
      </div>
      <div className='about-content'>
        <h2>SOBRE MI</h2>
        <p>Soy Tomas Russo Romera ,Desarrollador Full Stack con React JS con experiencia también en Back End. Dominio en backend con MongoDB , NodeJS y Sql para base de datos. Enfocado al desarrollo visual y dinámico de soluciones. Poseo habilidades a la hora de armar un código escalable y dinámico.
        </p>
        <div className='networks-content'>{networks.length>0&&networks.map(network=>
          <Network network={network}/>
          )}</div>
        <Button variant='outlined'color='primary' href={document}  download>Descargar CV</Button>
      </div>
    </div>
  )
}

export default AboutMe
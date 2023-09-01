import React from 'react'
import searchIcon from '../../assets/imgs/searchIcon.png'
import { Link } from 'react-router-dom'
import './MainContent.css'

function MainContent() {
  return (
    <div className='main-content-wrapper'>
        <form action="">
            <input type="text" placeholder='Busque por um filme' className='main-content-input'/>
            <button className='main-content-button' type='submit'>
                <img src={searchIcon} alt="" />
            </button>
        </form>
        <div className='main-content-more-informations'> 
          <span>Ou</span>
          <Link to="/bestMovie">Acesse os melhores filmes</Link>
        </div>
    </div>
  )
}

export default MainContent
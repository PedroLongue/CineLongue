import { useState } from 'react'
import React from 'react'
import searchIcon from '../../assets/imgs/searchIcon.png'
import { Link, useNavigate } from 'react-router-dom'
import './MainContent.css'

function MainContent() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }
  
  return (
    <div className='main-content-wrapper'>
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder='Busque por um filme' className='main-content-input' onChange={(e) => setSearch(e.target.value)} value={search}/>
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
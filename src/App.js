import React from 'react'
import './Components/Card/Card'
import NavBar from './Components/NavBar/NavBar'
import { useState } from 'react'
import HomeFinder from './Components/HomeFinder/HomeFinder'
import './App.css'
import Card from'./Components/Card/Card'


function App() {
  const [page,setPage] = useState('Home')
  
  return (
    <div className='Main'>
        <NavBar className='Nav' changePage = {setPage}/>

        {
          page == 'Home' &&
          <div>
            <HomeFinder className='FindHome'/>
          </div>
        }

        {
          page == 'Saved' && 
          <div>
            <Card/>
          </div>
        }
    </div>

  )
}

export default App

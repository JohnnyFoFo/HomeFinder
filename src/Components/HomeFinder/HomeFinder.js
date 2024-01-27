import './HomeFinder.css'
import React, { useState } from 'react'
import house from '../../Images/House.jpeg'
import Input from '../MuiCard/Input'

function HomeFinder() {
    const[page,setPage] = useState('Search')
    
    
        
       
  return (
    <div className='HomeFinder'>

        {page == 'Search' && 
            <div>
                <img src={house} className='House'></img>
                 <div >
                <Input changePage = {setPage} />
                {/* <input defaultValue={'Please Enter An Adress'} className='Input' type="text" onChange={(e) => setInput(e.target.value)}  /> */}
                </div>
            </div>
            }
        {
            page != 'Search' && 
            <div>
                <p>HOUSE INFORMATION</p>
            </div>
        }

        
        
      

    </div>
  )
}

export default HomeFinder

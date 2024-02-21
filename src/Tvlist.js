import React, { useState } from 'react'

import "./App.css"
import TvCard from './TvCard'
export default function Tvlist({series}) {
    const [sortOrder,setSortOrder] = useState('asc')
    const[sortedMoviesCount,setSortCount]=useState('asc')
    const sortedMovies = [...series].sort((a,b)=>{
      if(sortOrder === "asc"){
        return a.vote_count - b.vote_count
      } else{
        return b.vote_count - a.vote_count
      }
    })
    const sortedMoviesCt = [...series].sort((a,b)=>{
      if(sortedMoviesCount === "asc"){
        return a.vote_average - b.vote_average
      } else{
        return b.vote_average - a.vote_average
      }
    })
    const handleSort =()=>{
        setSortOrder((prev)=>(prev === "asc"?"desc":"asc"))
    }
    const handleSortct=()=>{
      setSortCount((prev)=>(prev === "asc"?"desc":"asc"))
    }
  return (
    <div >
        <div>
            <button onClick={handleSort} className='sort-btn'>
                Sort by vote average ({sortOrder==="asc"?"Ascending":"Descending"})
            </button>
            <button onClick={handleSortct} className='sort-btn'>
                Sort by vote count ({sortOrder==="asc"?"Ascending":"Descending"})
            </button>
            
        </div>
        <ul className='movielist'>
            {sortedMovies.map((tv)=>
            <TvCard  key={tv.id} tv = {tv}/>)}
        </ul>
    
    </div>
  )
}

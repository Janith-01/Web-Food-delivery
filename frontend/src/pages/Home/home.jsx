import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

function home() {

   const[category,setCategory] = useState("All");


  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default home
import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  const newCources=props.cources;
  let category=props.category;
  const [likedCources, setLikedCources]=useState([]);
  
  function getCources(){
    if(category==="All"){
      let allCources =[];
      Object.values(newCources).forEach(array=>{
      array.forEach(courceData=>{
        allCources.push(courceData);
        console.log(allCources);
        })
      })
      return allCources;
    }
    else{
      return newCources[category];
    }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
      getCources().map((cource)=>(
        <Card  key={cource.id} 
        data={cource}
        likedCources={likedCources}
        setLikedCources={setLikedCources}/>
      ))
      }
    </div>
  )
}

export default Cards

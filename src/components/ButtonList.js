import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Trending","Cricket","Music","Movies","Gaming","Live","Sports","WWE","Courses","GTA V","BMW M3","Bikes"];
  return (
    <div className="m-2 flex justify-center">

      {
        list.map((buttons,index)=>(
          <Button name={buttons} key={index}/>
        ))
      }
      
    </div>
  )
}

export default ButtonList

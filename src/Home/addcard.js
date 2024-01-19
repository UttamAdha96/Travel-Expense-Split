import React from 'react'
import "./card.css"
// {viewform}
const addcard = ({viewform}) => {
  return (<>
  {/* {viewform} */}
  <div className='cards' onClick={viewform}>
    <h1>+</h1>
    </div>
  
  
  </>
  )
}

export default addcard
import React from 'react'
import './Persondetail.css'

const AddPerson = ({viewPerform}) => {
  return (<>
  <div className='Add-person' onClick={viewPerform}>
    <p>+</p>
    </div>
  </>
  )
}

export default AddPerson
import React from 'react'
import './ExpDetail.css'

const AddExp = ({viewform}) => {
  return (<>
  <div className='Add-exp' onClick={viewform}>
    <p>+</p>
    </div>
  </>
  )
}

export default AddExp
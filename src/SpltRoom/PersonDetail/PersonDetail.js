import React from 'react'
import './Persondetail.css'

const PersonDetail = ({PersonName, TotalMoney, LeftMoney}) => {
  return (<>
  
        <div className='person-detail'>
          <div className='left-side-person'>
          <div className='person-name'>{PersonName ? PersonName:'N/A'}</div>
          <div className='Total-amount'>{TotalMoney ? TotalMoney:'N/A'}</div>
          </div>
          <div className='right-side-person'>
          <div className='left-amount-head'>Left Amount</div>
          <div className='left-amount'>({LeftMoney ? LeftMoney:'N/A'})</div>
          </div>
        </div>

  </>
  )
}

export default PersonDetail
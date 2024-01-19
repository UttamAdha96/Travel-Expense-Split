import React from 'react'
import './ExpDetail.css'

const ExpDetail = ({ expName , expDate, paidPerson, expContri, expPrice}) => {

  return (<>
  <div className='Exp-detail'>
          {/* Expense detail box another component */}
          <div className='left-det'>
          <div className='Exp-heading'>{expName ? expName:'N/A'}</div>
          <div className='Exp-other-det'>{expDate ? expDate: 'Add Date'}</div>
          <div className='Exp-other-det'>Paid by: {paidPerson ? paidPerson: 'N/A'}</div>
          <div className='Exp-other-det'>Split to: {expContri? expContri:'N/A'}</div>
        </div>
        <div className='right-det'>
          <div className='Exp-heading'>{expPrice ? expPrice:'N/A'}</div>
        </div>
    </div>
  
  </>
  )
}

export default ExpDetail
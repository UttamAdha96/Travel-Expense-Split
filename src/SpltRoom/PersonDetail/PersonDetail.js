import React from 'react'
import './Persondetail.css'
// import {Link } from "react-router-dom";

const PersonDetail = ({PersonName, TotalMoney}) => {
  const razorpaylink = "https://rzp.io/l/wUNI9o4XM";
  const openpayment = () => {
  window.open(razorpaylink, '_blank')
  }
  return (<>
  
        <div className='person-detail'>
          <div className='left-side-person'>
          <div className='person-name'>{PersonName ? PersonName:'N/A'}</div>
          <div className='Total-amount'>{TotalMoney ? TotalMoney:'N/A'}</div>
          </div>
          {/* <Link to='/paymentpage'> */}
          <div className='right-side-person'>
          {/* <div className='left-amount-head'>Left Amount</div> */}
          {/* <div className='left-amount'>({LeftMoney ? LeftMoney:'N/A'})</div> */}
          <div className='left-amount'>
            <button onClick={openpayment}>Clear Due</button> 
          </div>
          </div>
          {/* </Link> */}
        </div>

  </>
  )
}

export default PersonDetail
import React from 'react'
import { useState } from 'react';

const PersonAddForm = ({hidePerform, addingPer}) => {
    const [personDetails, setPersonDetails] = useState({
        WhatName: '',
        TotalAmount: '',
        // LeftAmount: '',
      });
// console.log(budgetDetails)
      const handlePerChange = (e) => {
        const { name, value } = e.target;
        setPersonDetails({
          ...personDetails,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const {WhatName, TotalAmount} = personDetails
        alert("Data saved")
        document.querySelector(".close-button").click()
        addingPer(WhatName, TotalAmount)
        // Perform any necessary action with the collected tripDetails, like sending it to a server or storing it in state.
        console.log(personDetails);
      };


  return (<>
  <div className="overlay">
      <div className="form-container">
      <button className="close-button" onClick={hidePerform}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Add a New Person</h2>
          <label> Name: </label>
            <input type="text" name='WhatName'  value={personDetails.WhatName} onChange={handlePerChange}/>
          
          <label> Add Amount: </label>
            <input type="text" name='TotalAmount'  value={personDetails.TotalAmount} onChange={handlePerChange}/>
          
          {/* <label>Paid By : </label>
            <input type="text" name='paidBy' value={budgetDetails.paidBy} onChange={handleExpChange} /> */}

          
          <button type="submit">Add Person</button> 
        </form>
      </div>
    </div>
  
  
  
  
  </>
  )
}

export default PersonAddForm
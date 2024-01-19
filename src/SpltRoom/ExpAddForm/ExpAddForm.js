import { useState } from 'react'
import React from 'react'

const ExpAddForm = ({hideform, addingExp}) => {
    const [budgetDetails, setBudgetDetails] = useState({
        WhatThingh: '',
        date: '',
        price:'',
        paidBy: '',
        DividedTo: '',
      });
// console.log(budgetDetails)
      const handleExpChange = (e) => {
        const { name, value } = e.target;
        setBudgetDetails({
          ...budgetDetails,
          [name]: value,
        });
      };
    
    //   const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setTripDetails({
    //       ...tripDetails,
    //       picture: file,
    //     });
    //   };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const {WhatThingh, date, price, paidBy, DividedTo} = budgetDetails
        alert("Data saved")
        document.querySelector(".close-button").click()
        console.log(DividedTo)
        addingExp(WhatThingh, date, price, paidBy, DividedTo)
        // Perform any necessary action with the collected tripDetails, like sending it to a server or storing it in state.
        console.log(budgetDetails);
      };
  return (<>
  <div className="overlay">
      <div className="form-container">
      <button className="close-button" onClick={hideform}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Add a New Exp</h2>
          <label> For What: </label>
            <input type="text" name='WhatThingh'  value={budgetDetails.WhatThingh} onChange={handleExpChange}  />
          
          <label> Date Of Expense: </label>
            <input type="text" name='date'  value={budgetDetails.date} onChange={handleExpChange} />

          <label> Price: </label>
          <input type="text" name='price'  value={budgetDetails.price} onChange={handleExpChange} />
          
          <label>Paid By : </label>
            <input type="text" name='paidBy' value={budgetDetails.paidBy} onChange={handleExpChange} />
          
          <label> Split To: </label>
            <input type="text" name='DividedTo'  value={budgetDetails.DividedTo} onChange={handleExpChange} />
          
          <button type="submit">Add Exp</button> 
        </form>
      </div>
    </div>
  
  
  
  </>
  )
}

export default ExpAddForm
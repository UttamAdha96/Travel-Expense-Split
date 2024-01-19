import React, { useState } from 'react'
import '../Tripform/form.css'

const FormTrip = ({hideform, addingTrip}) => {
    const [tripDetails, setTripDetails] = useState({
        place: '',
        date: '',
        price: '',
        picture: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTripDetails({
          ...tripDetails,
          [name]: value,
        });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setTripDetails({
          ...tripDetails,
          picture: file,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const {picture, place,date, price} = tripDetails
        alert("Data saved")
        document.querySelector(".close-button").click()
        addingTrip(picture, place, date, price)
        // Perform any necessary action with the collected tripDetails, like sending it to a server or storing it in state.
        console.log(tripDetails);
      };
  return (<>
 
    {/* <button className="btn close-form" onClick={hideform}>Close</button> */}
    <div className="overlay">
      <div className="form-container">
      <button className="close-button" onClick={hideform}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Add a New Trip</h2>
          <label>Place:</label>
            <input type="text" name="place" value={tripDetails.place} onChange={handleInputChange} required />
          
          <label> Date of Going: </label>
            <input type="text" name="date" value={tripDetails.date} onChange={handleInputChange} required />
  
          <label> Price: </label>
            <input type="text" name="price" value={tripDetails.price} onChange={handleInputChange} required />
  
          <label> Upload Picture: </label>
            <input type="file" name="picture" onChange={handleFileChange} accept="image/*" required />
          <button type="submit">Add Trip</button> 
          {/* will link to home page after creating post */}
        </form>
      </div>
    </div>
  
  </>
  )
}

export default FormTrip
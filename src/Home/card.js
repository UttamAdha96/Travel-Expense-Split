import React from 'react'
import "./card.css"
import {Link } from "react-router-dom";

export default function card(props, {justCheck}){
  
  return (
    <>
    <Link style={{textDecoration: 'none'}} to="/SplitSection">
    <div className='cards' onClick={justCheck}>
      <div className="placeimg">
      <img src={props.tripimg} alt="...?"/>
      </div>
      <div className="placename">{props.tripname}</div>
      <div className="date">Date: {props.tripdate}</div>
      {/* <Link to="/LiveAuction"> */}
      <div className="price">Total Expense: {props.tripprice}</div>
      {/* </Link> */}
    </div>
    </Link>
    </>
  );
};


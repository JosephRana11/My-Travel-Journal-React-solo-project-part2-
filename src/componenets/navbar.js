import React from "react";

//logo icon
import earth from '../images/earth.png'

export default function Navbar(props){
  return (
    <div className="navbar-container">
    <div className="middle-container">
    <img src={earth} className="nav-img"></img>
    <h1 className="nav-title">My Travel Journal</h1>
    </div>
    </div>
  )
}
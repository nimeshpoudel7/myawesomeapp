import React from 'react'
import './App.css';
const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
      <img src={props.avatar} alt="Avatar" style={{width: '100%'}} />
      <div className="container">
      
        <h4><b>{props.name}</b></h4> 
        <div><input type='text' onChange={props.onInput} value={props.name}></input></div>
        <p>{props.job}</p> 
        <p><input type='text' onChange={props.onInputJob} value={props.job}></input></p>
        <button className='button' onClick={props.onChangeName2}>Change 2</button>
        <div>{props.children}</div>
      </div>
    </div>
    )
}

export default Card

import React from 'react'
import './App.css';
const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
      <img src={props.avatar} alt="Avatar" style={{width: '100%'}} />
      <div className="container">
      
        <h4><b>{props.name}</b></h4>
        {/* <div>
        <input type='text' value={props.name} onChange={props.onChangeName}/>
        </div> */}
        <p>{props.job}</p> 
        <div><input type='text' onChange={props.onchangename} value={props.name}></input></div> 
        <button className='button button-red'onClick={props.ondelete}>Delete</button>
        <div>{props.children}</div>
      </div>
    </div>
    )
}

export default Card
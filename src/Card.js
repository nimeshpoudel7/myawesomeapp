import React,{useState,useEffect} from 'react'
import './App.css';
const Card = (props) => {
    console.log(props)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const mouseMovement=(a)=>{
        setX(a.clientX)
        setY(a.clientY)
    }
    // console.log('mouse events'+x +y)
    useEffect(() => {
      // window.addEventListener('click',mouseMovement)
      window.addEventListener('mousemove',mouseMovement)
      return () => {
        window.removeEventListener('mousemove',mouseMovement)
        console.log('clean completed')
      }
    }, [])
    return (
        <div className="card">
      <div className="container">
      <p>x: {x}</p>
      <p>x: {y}</p>
        <h4><b>{props.name}</b></h4>
        {/* <div>
        <input type='text' value={props.name} onChange={props.onChangeName}/>
        </div> */}
        <p>{props.phone}</p> 
        <p>{props.street}</p>
       <input type='text' onChange={props.onchangename} value={props.name}></input>
       {/* <input type='text' onChange={props.onchnagestreet} value={props.street}></input> */}
        <button className='button button-red'onClick={props.ondelete}>Delete</button>
        {/* <div>{props.children}</div> */}
      </div>
    </div>
    )
}

export default Card
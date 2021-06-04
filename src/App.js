import React ,{useState} from 'react'
import './App.css';
import Card from './Card'
function App() {
  const buttongroup =(
    <div>
    <button className="button button3">Red</button>
  <button className="button button5">Black</button>
    </div>
  )
  const  [name, setName] = useState('Nimesh Poudel')
 const [showCard, setshowCard] = useState(false)
  const ChangeHandeler=(name)=>{
    setName(name)
  }
  const changevalue=()=>{
    setshowCard(!showCard)
  }
 
  const ChangeInputHandler=(event)=>{
    setName(event.target.value)
  }
  
   const  [job, setJob] = useState('Manager')
   const changeInputHandlerJob=(event)=>{
     setJob(event.target.value)
   }
   const hideandshow=  showCard? <Card
    avatar='https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
    name={name}
    job={job}
    onChangeName2={()=>ChangeHandeler('Roshan Poudel1')}
    onInput={ChangeInputHandler}
    onInputJob={changeInputHandlerJob}
    >
     
     {buttongroup}
    </Card>
    :null
  return (
  <div className="App">
    <button className="button" onClick={changevalue} >show and hide</button>
    {hideandshow}
  </div>
  );
}

export default App;

import React ,{useState,useEffect} from 'react'
import './App.css';
import Card from './Card'
import {ThemeProvider} from 'styled-components'
import {Button,Input} from './element/Button'
import axios from 'axios'

const theme = {
  mango:'orange',
  primary:'green'
 
}
// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;
function App() {
  
 
  // const  [name, setName] = useState('Nimesh Poudel')
 const [showCard, setshowCard] = useState(false)
 const  [objUserDetails, setobjUserDetails] = useState([])

 // promises in use efect
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then (responseJson => {
    console.log(responseJson.data)
    setobjUserDetails(responseJson.data)
  })
  .catch(responseJson => {
    console.log('fails')
  })
},[])
// useEffect(() => {
//   alert('appjs')
// },[showCard])
// const NamechangeOject=(event,id)=>{
//   //1 which card
//   const CardIndex=objUserDetails.findIndex((pass)=>{
//     return pass.id===id
//   })
//   console.log(CardIndex)
//   //2 make copy spread operator
//  const copy_card=[...objUserDetails]
//   //3 change specify card
//   copy_card[CardIndex].name=event.target.value
//   //4 set values of the card
//   setobjUserDetails(copy_card)
// }
const NamechangeOject=(event,id)=>{
  //1. which object
  const findCardIndex= objUserDetails.findIndex((passingobject)=>{
    return passingobject.id===id
  })
  //2. copy objct
  const card_copy=[...objUserDetails]
  //3. modify object
  card_copy[findCardIndex].name=event.target.value
  //4.set object
  setobjUserDetails(card_copy)
  
}
const streetChangeobj=(event,id)=>{
  // 1. which card
  const cardFindFindex =objUserDetails.findIndex((pass)=>{
    return pass.id===id
  })
  // 2.copycard
  const copy_card =[...objUserDetails]
  // 3.modifi card
  copy_card[cardFindFindex].address.street=event.target.value
  // 4.set card
  setobjUserDetails(copy_card)
}

// const objeForUser=()=>{
//   setobjUserDetails(objUserDetails)
// }
  const deletechangehandler=(objdetails)=>{
    const deletedata=[...objUserDetails]
    console.log(deletedata)
    deletedata.splice(objdetails,1)
    // console.log("dele "+deletedata)
    setobjUserDetails(deletedata)
    
  }
  // useEffect(() => {
  //   alert('appjs')
  // },[objUserDetails])
  // const buttonStyle={
  // backgroundColor: '#4CAF50'
  // }
  // if (objUserDetails.length<3) {
  //   buttonStyle.backgroundColor='red';
  // }
  //  if (objUserDetails.length<2) {
  //   buttonStyle.backgroundColor='pink';
  // }
  const classes=['button']
   if (objUserDetails.length<3) {
     classes.push('red')
   }
    if (objUserDetails.length<2){
    classes.push('pink')
    console.log('pink')
  }
  
  // const classes=['checkbtn']
  // if (objUserDetails.length<3){
  // classes.push('red')
  // console.log('red')
  // }
  // if (objUserDetails.length<2){
  //   classes.push('pink text')
  //   console.log('pink')
  // }
  
  const changevalue=()=>{
    setshowCard(!showCard)
  }
  let  textmsg =''
  if (showCard===true) {
    textmsg='hide'
  } else {
    textmsg='show' 
  }
 
   const hideandshow=  showCard?( objUserDetails.map((details,acc)=>{

    return <Card
    name={details.name}
    phone={details.phone}
    key={details.id}
    street={details.address.street}
    ondelete={()=>deletechangehandler(acc)}
    onchangename={(event)=> NamechangeOject(event,details.id)}
    onchnagestreet={(event)=>streetChangeobj(event,details.id)}
    />})
   ):null
   
  // const newobj=objUserDetails.reduce((acc,index)=>{
    
  //   console.log(acc)
  //   acc=acc+1
  //   return acc
  // },0) 


  
  return (
  <div className="App">
    <ThemeProvider theme={theme}>
    <Button color='primary' length={objUserDetails.length}>hey</Button>
    <Button color='mango' length={objUserDetails.length}>hello</Button>
    <button className={classes.join(' ')}  onClick={changevalue} >{textmsg}</button>
    {hideandshow}
    <Input color='mango'></Input>
    </ThemeProvider>
  </div>
  );
}

export default App;
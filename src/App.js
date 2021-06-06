import React ,{useState} from 'react'
import './App.css';
import Card from './Card'
function App() {
 
  // const  [name, setName] = useState('Nimesh Poudel')
 const [showCard, setshowCard] = useState(false)
 const  [objUserDetails, setobjUserDetails] = useState([
   {
  id:'sas',
  name: 'mane Schuster',
  title: ' Operations Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 },
 {
  id:'saaa',
  name: 'sahe Schuster',
  title: 'International  Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 },
{
  id:'caa',
  name: 'hehanjana Schuster',
  title: 'International Operations ',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 }
])

const NamechangeOject=(event,id)=>{
  //1 which card
  const CardIndex=objUserDetails.findIndex((pass)=>{
    return pass.id===id
  })
  console.log(CardIndex)
  //2 make copy spread operator
 const copy_card=[...objUserDetails]
  //3 change specify card
  copy_card[CardIndex].name=event.target.value
  //4 set values of the card
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
  const changevalue=()=>{
    setshowCard(!showCard)
  }
  
 
   const hideandshow=  showCard?(
    objUserDetails.map((details,acc)=>
      
    <Card
    avatar='https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
    name={details.name}
    job={details.title}
    key={details.id}
    ondelete={()=>deletechangehandler(acc)}
    onchangename={(event)=> NamechangeOject(event,details.id)}
    />)
   ):null
   
  // const newobj=objUserDetails.reduce((acc,index)=>{
    
  //   console.log(acc)
  //   acc=acc+1
  //   return acc
  // },0) 

  
  
  return (
  <div className="App">
    <button className="button" onClick={changevalue} >show and hide</button>
    {hideandshow}
  </div>
  );
}

export default App;

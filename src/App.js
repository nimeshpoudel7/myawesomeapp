import React ,{useState} from 'react'
import './App.css';
import Card from './Card'
function App() {
 
  const  [name, setName] = useState('Nimesh Poudel')
 const [showCard, setshowCard] = useState(false)
 const  [objUserDetails, setobjUserDetails] = useState([
   {
  id: '01',
  name: 'mane Schuster',
  title: ' Operations Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 },
 {
  id: '02',
  name: 'sahe Schuster',
  title: 'International  Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 },
{
  id: '03',
  name: 'hehanjana Schuster',
  title: 'International Operations ',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 }
])
const objeForUser=()=>{
  setobjUserDetails(objUserDetails)
}


  const changevalue=()=>{
    setshowCard(!showCard)
  }
 
   const hideandshow=  showCard? <Card
    avatar='https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
    name={objUserDetails.name}
    job=""
    >
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

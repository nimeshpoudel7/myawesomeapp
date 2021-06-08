import React ,{Component} from 'react'
import './App.css';
import Card from './Card'
import {ThemeProvider} from 'styled-components'
import {Button,Input} from './element/Button'

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
class App extends Component {
  
 constructor(props){
    super(props)
    this.state={
      objUserDetails:[
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
     ],
     showCard:false
    }
 }
  // const  [name, setName] = useState('Nimesh Poudel')
 

 NamechangeOject=(event,id)=>{
  //1. which object
  const findCardIndex= this.state.objUserDetails.findIndex((passingobject)=>{
    return passingobject.id===id
  })
  //2. copy objct
  const card_copy=[...this.state.objUserDetails]
  //3. modify object
  card_copy[findCardIndex].name=event.target.value
  //4.set object
  this.setState({objUserDetails:card_copy})
}

// const objeForUser=()=>{
//   setobjUserDetails(objUserDetails)
// }
   deletechangehandler=(objdetails)=>{
    const deletedata=[...this.state.objUserDetails]
    console.log(deletedata)
    deletedata.splice(objdetails,1)
    // console.log("dele "+deletedata)
    this.setState({objUserDetails:deletedata})
  }
  // const buttonStyle={
  // backgroundColor: '#4CAF50'
  // }
  // if (objUserDetails.length<3) {
  //   buttonStyle.backgroundColor='red';
  // }
  //  if (objUserDetails.length<2) {
  //   buttonStyle.backgroundColor='pink';
  // }

  // const classes=['checkbtn']
  // if (objUserDetails.length<3){
  // classes.push('red')
  // console.log('red')
  // }
  // if (objUserDetails.length<2){
  //   classes.push('pink text')
  //   console.log('pink')
  // }
  
   changevalue=()=>{
     this.setState({showCard:!this.state.showCard})
  }

   
  // const newobj=objUserDetails.reduce((acc,index)=>{
    
  //   console.log(acc)
  //   acc=acc+1
  //   return acc
  // },0) 

    render(){

      const classes=['button']
      if (this.state.objUserDetails.length<3) {
        classes.push('red')
      }
       if (this.state.objUserDetails.length<2){
       classes.push('pink')
       console.log('pink')
     }
     let  textmsg =''
     if (this.state.showCard===true) {
       textmsg='hide'
     } else {
       textmsg='show' 
     }
    
     
      const hideandshow= this.state.showCard?(this.state.objUserDetails.map((details,acc)=>{

        return <Card
        avatar='https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
        name={details.name}
        job={details.title}
        key={details.id}
        ondelete={()=>this.deletechangehandler(acc)}
        onchangename={(event)=>this.NamechangeOject(event,details.id)}
        />})
       ):null
      return (
        <div className="App">
          <ThemeProvider theme={theme}>
          <Button color='primary' length={this.state.objUserDetails.length}>hey</Button>
          <Button color='mango' length={this.state.objUserDetails.length}>hello</Button>
          <button className={classes.join(' ')}  onClick={this.changevalue} >{textmsg}</button>
          {hideandshow}
          <Input color='mango'></Input>
          </ThemeProvider>
        </div>
        );
    }
  
 
}

export default App;

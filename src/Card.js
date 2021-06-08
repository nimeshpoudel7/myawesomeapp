import React,{Component} from 'react'
import './App.css';
class Card extends Component  {
    // console.log(this.props)
    render(){
      return (
        <div className="card">
      <img src={this.props.avatar} alt="Avatar" style={{width: '100%'}} />
      <div className="container">
      
        <h4><b>{this.props.name}</b></h4>
        {/* <div>
        <input type='text' value={this.props.name} onChange={this.props.onChangeName}/>
        </div> */}
        <p>{this.props.job}</p> 
        <div><input type='text' onChange={this.props.onchangename} value={this.props.name}></input></div> 
        <button className='button button-red'onClick={this.props.ondelete}>Delete</button>
        <div>{this.props.children}</div>
      </div>
    </div>
    )
    }
    
}

export default Card

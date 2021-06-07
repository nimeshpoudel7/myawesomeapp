import styled,{ css} from 'styled-components'
const Button=styled.button`
border: none;
${props=>
  props.color && css `
  background-color:${props=>props.length>2? props.theme[props.color]:props.length==2?'red':props.theme[props.color]};
  color:${props=>props.length>0?'blue':null};
  `
}

padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
`;

export  default Button 
import styled from 'styled-components'
const Input = styled.input`
background:#f8e7eb;
  border-width: 1px ;
  border-style: solid;
  width: 70%;
    padding: 0 10px;
    line-height: 40px;
    font-family: 'Roboto', sans-serif;
    height: 5vw;
  
`

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-self:  flex-start;;
    
    .title{
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    
    height: 3vw;
    width: 35vw;
    }
    
    .text{
     flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    width: 40vw;
    text-align: left;
    height: 7vw;
    
    }
    
   

    }
   
    
    
    `
const BoxInput = styled.div`
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: flex-start;
    background: #f8e7eb;
     text-align: left;
    width: 28vw;
     border-width: 1px;

     border-style: solid;
     border-color: #e32424
   
    height: 2vw;
`
const InputStyle = styled.div`
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: flex-start;
    background: #f8e7eb;
     text-align: left;
    width: 28vw;
     border-width: 1px;

     border-style: solid;
     border-color: #e32424
   
    height: 5vw;
`

const BoxText = styled.div`

         background: #f8e7eb;
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    background: #f8e7eb;
    width: 40vw;
        margin: 10px;
    border-width:2px;
    text-align: left;
    height: 20vw;
 
`

const TextBox = styled.div`
     flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    width: 35vw;
    text-align: left;
    height: 15vw;
    margin: 0 3vw 3vw;
`
export { Container, InputStyle, BoxInput, BoxText, TextBox, Input}
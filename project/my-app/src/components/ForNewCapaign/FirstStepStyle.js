import styled from 'styled-components'
const Input = styled.input`
background:#f8e7eb;
  border-width: 0 ;
   border-bottom: 3px solid #e32424;
  border-radius: 10px;
  width: 100%;
    padding: 0 10px;
    line-height: 40px;
    font-family: 'Roboto', sans-serif;
    height: 3vw;
  
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
    
    .box{
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    background: #f8e7eb;
    width: 40vw;
    margin: 10px;
    text-align: left;
    height: 17vw;

    }
    .text-box{
     flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    width: 35vw;
    text-align: left;
    height: 15vw;
    margin: 0 3vw 3vw;
    
    
    }
    
    
    
    `
export { Container, Input}
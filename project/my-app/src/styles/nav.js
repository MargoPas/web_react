import styled from 'styled-components'
const DesktopNavbar = styled.nav`
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-self:  flex-start;;
        text-align: left;
background: #e32424;
color: white;

height: 25vh;

.nav-links{
    display: flex;
    flex-flow: row nowrap;
    flex-wrap: wrap; 
    align-self: center;
    text-align: left;
    justify-content: space-between;
    
    width: 30vw;
    
    list-style: none;
    
}

.link{
    flex-wrap: wrap; 
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-decoration: none;
    font-size: 2.5vh;
    margin: 10px 10px 10px;
    text-align: left;
 .Section-Title{
  flex-wrap: wrap; 
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-decoration: none;
    font-size: 2.5vh;
}
`

const MobileNavbar = styled.nav`



background: #e32424;
color: white;



.nav-links:{
display:flex;
flex-flow: column nowrap;
justify-content: flex-end;
align-item: center;

height: 60vh;

list-style: none;
}
.links{
color: white;
font-size: 2.5vh;
text-decoration: none;
}
`
export  {DesktopNavbar, MobileNavbar}

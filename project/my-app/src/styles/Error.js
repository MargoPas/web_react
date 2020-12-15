import styled from "styled-components";
const CenterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RedBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  background: #f8e7eb;
  width: 40vw;
  margin: 100px;
  text-align: left;
  height: 15vw;
  position: absolute;

  .text {
    position: relative;
    top: 10px;
    left: 20px;
    right: 100px;
  }

  .BigTextBox {
    
    font-size: 30px;
    width: 30vw;
    height: 5vw;
    color: #ac1316;
  }

  .SmallTextBox {
    top: 5px;
    text-decoration: none;
    font-size: 20px;
    width: 40vw;
    text-align: left;
    height: 6vw;
    color: #ac1316;
  }

  .VerySmallTextBox {
    text-decoration: none;
    font-size: 15px;
    width: 100%;
    text-align: left;
    height: 6vw;
    color: #ac1316;
  }

  .image {
    top: 5px;
    float: left;
  }

  a {
    text-decoration: none;
  }
`
export  {RedBox, CenterContainer}
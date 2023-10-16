import React from 'react'
import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Header() {
  return (
    <HeaderContainer>
        <ArrowBackOutlinedIcon/>
        <ArrowForwardOutlinedIcon/>
        <AccessTimeIcon/>
  
        <HeaderSearch>
          <input id='header-input' type='text' placeholder='Search'/>
          <SearchIcon/>
        </HeaderSearch>
        
        <HeaderRight>
          <HelpOutlineIcon/>
        </HeaderRight>

    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
   display: flex;
   position: fixed;
   width: 100%;
   justify-content: center;
   align-items: center;
   padding: 10px 0;
   background-color: var(--slack-color);
   color: white;
`;


const HeaderRight = styled.div`
    justify-content: flex-end;
    postion: absolute;
`;

const HeaderSearch = styled.div`
flex: .5;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
justify-content: center;
align-items: center;
padding: 0 10px;
color: gray;
border: 1px gray solid;

> input {
  background-color: transparent;
  width: 90vh;
  border: none;
  text-align: center;
  outline: 0;
  color: white;
}
`;



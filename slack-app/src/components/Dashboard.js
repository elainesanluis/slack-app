import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

function Dashboard() {
  return (
    <div>
     <Header/>
      <Appbody>
       <Sidebar/>
       <Chat/>
     </Appbody>
   </div>
  )
}

export default Dashboard;

const Appbody = styled.div`
 display: flex;
 height: 100vh;
`;
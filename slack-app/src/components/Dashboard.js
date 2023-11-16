import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div>
     <Header/>
      <Appbody>
       <Sidebar/>
     </Appbody>
   </div>
  )
}

export default Dashboard;

const Appbody = styled.div`
 display: flex;
 height: 100vh;
`;
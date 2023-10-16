import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function Sidebar() {
  return (
    <SidebarContainer>
     <SidebarHeader>
        <SidebarInfo>
            <h2>Avion School</h2>
            <h3>
                <FiberManualRecordIcon/>
                Elaine San Luis
            </h3>
        </SidebarInfo>

        <KeyboardArrowDownIcon/>
        <FilterListIcon/>
        <CreateOutlinedIcon/>
     </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 50px;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;

`;

const SidebarInfo = styled.div``;






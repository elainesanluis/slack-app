import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import CommentIcon from '@mui/icons-material/Comment';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddIcon from '@mui/icons-material/Add';

import { Avatar } from '@mui/material';

function Sidebar() {

  return (
    <SidebarContainer>
     <SidebarHeader>
        <SidebarInfo>
            <h2>Avion School</h2>
        </SidebarInfo>
        <KeyboardArrowDownIcon/>
        <FilterListIcon/>
        <CreateOutlinedIcon/>
     </SidebarHeader>
<SidebarOption Icon={CommentIcon} title='Threads' />
<SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
<SidebarOption Icon={DraftsIcon} title='Saved items' />
<SidebarOption Icon={ExpandLessIcon} title='Show less' />
<hr/>
<SidebarOption Icon={ArrowDropDownRoundedIcon} title='Channel' />
<SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
{channels?.docs.map(doc=> (
    <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
  )
    )}

<UserProfile>    
<SidebarAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL} variant='rounded'/>
<h3>
  <FiberManualRecordIcon/>
  Elaine San Luis
</h3>
</UserProfile>

    </SidebarContainer>
  )
}

export default Sidebar;

const UserProfile = styled.div`
position: absolute;
bottom: 50px;
left: 20px;
height: auto;
>h3 {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  align-items: center;
}
>h3 >.MuiSvgIcon-root {
  font-size: 14px;
  margin-top: 1px;
  margin-right: 2px;
  color: green;
}
`;

const SidebarAvatar = styled(Avatar)`
font-size: 100px;
cursor: pointer;
border: 3px solid white;
color: inherit;
:hover {
  opacity: 0.8;
}
`;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  >hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;

`;

const SidebarInfo = styled.div`
flex: 1;

>h2 {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 5px;
}
`;






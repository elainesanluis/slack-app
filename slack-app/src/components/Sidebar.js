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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddIcon from '@mui/icons-material/Add';

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
<SidebarOption Icon={CommentIcon} title='Threads' />
<SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
<SidebarOption Icon={DraftsIcon} title='Saved items' />
<SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
<SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
<SidebarOption Icon={AppsIcon} title='Apps' />
<SidebarOption Icon={FileCopyIcon} title='File Browser' />
<SidebarOption Icon={ExpandLessIcon} title='Show less' />
<hr/>
<SidebarOption Icon={ArrowDropDownRoundedIcon} title='Channel' />
<SidebarOption Icon={AddIcon} title='Add Channel' />
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

const SidebarInfo = styled.div`
flex: 1;

>h2 {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 5px;
}

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






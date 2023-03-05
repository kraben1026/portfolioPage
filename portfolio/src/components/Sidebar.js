import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { useState } from 'react';

const SidebarPro = () => {
    
    const { collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate();
    
    const handleClick = () =>{
        setCollapsed(!collapsed);
        collapseSidebar();
    }
  return (
    <>
    <Sidebar style={{height: '60%', display:'flex', justifyContent:'center', flexDirection: 'column'}}>
    <Menu>
        {collapsed ? (
            <MenuItem style={{position: 'relative', top:0, right:0}} icon={<FiChevronsRight/>} onClick={handleClick} />
        ) : (
            <MenuItem style={{display:'flex', flexDirection:'row-reverse'}} icon={<FiChevronsLeft/>}  onClick={handleClick}>
                 
                </MenuItem>
        )}
        
    <MenuItem> Home </MenuItem>
    <SubMenu label="About me">
      <MenuItem> Skills </MenuItem>
      <MenuItem> Projects </MenuItem>
    </SubMenu>
    <MenuItem> Contact </MenuItem>
    <MenuItem> Blog </MenuItem>
  </Menu>
    </Sidebar>
    <main>
    <button >Collapse</button>
    <button onClick={() => navigate('/contact') }>Collapse</button>
  </main>
  </>
  )
}

export default SidebarPro
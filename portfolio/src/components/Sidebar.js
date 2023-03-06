import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { useState } from "react";
import './styles.css'

const SidebarPro = () => {
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setCollapsed(!collapsed);
    collapseSidebar();
  };
  const toGo = (link) =>{
    navigate(link)
  }
  return (
      <Sidebar
        style={{
        
        }}
      >
        <Menu>
          {collapsed ? (
            <MenuItem
              style={{ position: "relative", top: 0, right: 0}}
              icon={<FiChevronsRight />}
              onClick={handleClick}
            />
          ) : (
            <MenuItem
              style={{ display: "flex", flexDirection: "row-reverse" }}
              icon={<FiChevronsLeft />}
              onClick={handleClick}
            ></MenuItem>
          )}

          <MenuItem onClick={() => toGo('/home')}> Home </MenuItem>
          <SubMenu label="About me">
            <MenuItem onClick={() => toGo('/skills')}> Skills </MenuItem>
            <MenuItem onClick={() => toGo('/projects')}> Projects </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => toGo('/contact')}> Contact </MenuItem>
          <MenuItem onClick={() => toGo('/blog')}> Blog </MenuItem>
        </Menu>
      </Sidebar>  
  );
};

export default SidebarPro;

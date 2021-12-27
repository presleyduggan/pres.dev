import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = () => {
    return ( 
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>Pres.dev</MenuItem>
            <SubMenu title="Stonks">
              <MenuItem>Main</MenuItem>
              <MenuItem>Hall of Fame</MenuItem>
              <MenuItem>Hall of Shame</MenuItem>
            </SubMenu>
          </Menu>
          </ProSidebar>
     );
}

export default SideBar;
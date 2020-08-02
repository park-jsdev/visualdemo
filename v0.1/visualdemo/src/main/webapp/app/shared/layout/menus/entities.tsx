import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Algorithms" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/sorting">
      Sorting
    </MenuItem>
    <MenuItem icon="asterisk" to="/graphs">
      Graph
    </MenuItem>
    {/* <MenuItem icon="asterisk" to="/location">
      Location
    </MenuItem> */}
    {/* <MenuItem icon="asterisk" to="/department">
      Department
    </MenuItem>
    <MenuItem icon="asterisk" to="/task">
      Task
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee">
      Employee
    </MenuItem>
    <MenuItem icon="asterisk" to="/job">
      Job
    </MenuItem>
    <MenuItem icon="asterisk" to="/job-history">
      Job History
    </MenuItem> */}
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);

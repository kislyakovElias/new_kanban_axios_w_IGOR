import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Menu(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    // prevState => !prevState
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Menu
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Actions</DropdownItem>
                <DropdownItem onClick={props.addCardToggle}>Add Card</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={props.addCardToggle}>1 Action</DropdownItem>
                {/*<DropdownItem>2 Action</DropdownItem>*/}
                {/*<DropdownItem>3 Action</DropdownItem>*/}
            </DropdownMenu>
        </Dropdown>
    );
}



export default Menu;

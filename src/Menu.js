import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Controller from "./Controller";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader,
    Label, Input , } from 'reactstrap';


function Menu(props) {

    const [enable, setEnable] = useState(false);
    const toggle = () => {setEnable(!enable) }


    return (
        <div>
            <div className="dropdown">
                <button onClick={toggle} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                    {/*<span class="caret"></span>*/}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    );
};














export default Menu;

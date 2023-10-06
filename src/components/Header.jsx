import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header(props){

    const[anchorEI , setanchonEI] = useState(null);
    const open = Boolean(anchorEI);
    function handleClickOnAbout(event){
        setanchonEI(event.currentTarget)
    }
    function close(){
        setanchonEI(null);
    }


    return(
        <div className="nav">
            <h2>New Project</h2>
            <ul id="navlist">
                <li>HOME</li>
                <li><Button 
                    style={{backgroundColor:"gray" , border:"0px" , color:"black"}}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup={true}
                    area-aria-expanded={open?'true':undefined}
                    onClick={handleClickOnAbout}
                >
                about
                </Button></li>
                <li>CONTACT</li>
                <li>SIGN-UP</li>
                <li>LOG-IN</li>
            </ul>
            <Menu
                id="basic-menu"
                anchorEl={anchorEI}
                open={open}
                onClose={close}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={close}>Profile</MenuItem>
                <MenuItem onClick={close}>My account</MenuItem>
                <MenuItem onClick={close}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Header;
import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkHeader = () => {

    const isActive = ({isActive}) => isActive ? 'activeHeader' : ''
    return (
        <>
            <span>
                <NavLink className={isActive} to={'/home'}> Home </NavLink>
            </span>
            <span>
                <NavLink className={isActive} to={'/about'}> About </NavLink>
            </span>
           <span>

               <NavLink className={isActive} to={'/notFound'}> Not Found </NavLink>
           </span>
        </>
    );
};

export default NavLinkHeader;
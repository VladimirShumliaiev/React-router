import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkHeader = () => {

    const isActive = ({isActive}) => isActive ? 'activeHeader' : ''
    return (
        <div>
            <span>
                <NavLink className={isActive} to={'/home'}><h3>Home</h3> </NavLink>
            </span>
            <span>
                <NavLink className={isActive} to={'/about'}><h3>About</h3> </NavLink>
            </span>
           <span>

               <NavLink className={isActive} to={'/notFound'}><h3>Not Found</h3> </NavLink>
           </span>

        </div>
    );
};

export default NavLinkHeader;
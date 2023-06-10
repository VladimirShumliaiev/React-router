import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkHeader = () => {

    const isActive = ({isActive}) => isActive ? 'activeHeader' : ''
    return (
        <>
            <h1>
                <NavLink className={isActive} to={'/home'}>Home </NavLink>
                <NavLink className={isActive} to={'/about'}>- About -</NavLink>
                <NavLink className={isActive} to={'/notFound'}> Not Found</NavLink>
            </h1>
        </>
    );
};

export default NavLinkHeader;
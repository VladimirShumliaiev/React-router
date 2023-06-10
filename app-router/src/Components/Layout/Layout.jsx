import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <div className={'App'}>
            <div className={'Header'}>
                <Header/>
            </div>
            <div className={'Maine'}>
                <Outlet/>
            </div>
            <div className={'Footer'}>
                Footer
            </div>
        </div>
    );
};

export default Layout;
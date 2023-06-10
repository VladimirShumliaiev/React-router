import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "../Header/Home/Home";
import About from "../Header/About/About";
import NotFound from "../Header/NotFound/NotFound";

const LayoutCell = () => {
    return (
        <div>
           <Routes>
               <Route path={'/'} element={<Layout/>}>
                   <Route index path={'/home'} element={<Home/>}/>
                   <Route path={'/about'} element={<About/>}/>
                   <Route path={'*'} element={<NotFound/>}/>
               </Route>
           </Routes>
        </div>
    );
};

export default LayoutCell;
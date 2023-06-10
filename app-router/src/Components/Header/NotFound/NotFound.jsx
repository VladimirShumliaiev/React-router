import React from 'react';
import {Route, Routes} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div>
                Page doesn't exist
            </div>
            <div>
                Page doesn't exist
            </div>
            <div>
                Page doesn't exist
            </div>
            <div>
                <a href={'/'}>
                    Back to homePage?
                </a>
            </div>
        </div>
    );
};

export default NotFound;
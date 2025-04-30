import React from 'react';
import Home from '../Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <Home></Home>
            <Outlet></Outlet>
        </>
    );
};

export default Root;
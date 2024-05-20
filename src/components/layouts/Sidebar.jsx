import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const MainSidebar = (props) => {
    const {isShowSideBar} = props
   
    // drawer-open
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className={`drawer ${isShowSideBar ? 'drawer-open': 'drawer-close'}`}> 
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" value={isShowSideBar} />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/Documentation">Documentation</Link> </li>
                        <li><Link to="/Calendar" >Calendar</Link> </li>
                        <li><Link to="/Ecommerce" >E-commerce</Link> </li>
                        <li><Link to="/Examples" >Examples</Link></li>
                    </ul>
                </div >
            </div >
        </div >
    )
}

export default MainSidebar
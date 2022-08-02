import React from 'react';
import { NavLink } from 'react-router-dom';
import {LayoutUI} from './style';

const Layout = () => {

  return (
      <LayoutUI>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/data">login</NavLink>
        <NavLink to="/map">map</NavLink>
        <NavLink to="/full">full</NavLink>
      </LayoutUI>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../componentes/NavBar/NavBar';
import NavBarLink from '../../componentes/NavBarLink/NavBarLink';

export default function SellerLayout() {
  return (
    <>
      <NavBar
        userName="thiago"
      >
        <NavBarLink name="Pedidos" path="/seller/orders" />
      </NavBar>
      <Outlet />
    </>
  );
}

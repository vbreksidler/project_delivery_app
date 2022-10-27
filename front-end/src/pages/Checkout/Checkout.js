import React from 'react';
import Address from '../../componentes/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../componentes/Tables/CustomerCheckoutTable';
import CustomerOrderTotalPrice
  from '../../componentes/TotalPrice/CustomerOrderTotalPrice';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="CheckoutPage">
      <h2 className="CheckoutPageTitle">Finalizar Pedido</h2>
      <CustomerCheckoutTable />
      <CustomerOrderTotalPrice testIdPrefix="customer_checkout" />
      <Address />
    </div>
  );
}

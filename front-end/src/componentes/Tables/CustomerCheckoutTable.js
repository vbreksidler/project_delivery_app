import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import TableRowItems from './TableRowItems';
import './Table.css';

export default function CustomerCheckoutTable() {
  const { cart, setCart, setTotalPrice, totalPrice } = useContext(CartContext);

  const handleRemove = (id, subTotal) => {
    const items = cart.filter((item) => item.id !== id);
    setTotalPrice(totalPrice - subTotal);
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  return (
    <table className="Table">
      <thead>
        <tr className="TableRow">
          <th className="ColumnTitle">Item</th>
          <th className="ColumnTitle">Descrição</th>
          <th className="ColumnTitle">Quantidade</th>
          <th className="ColumnTitle">Valor unitário</th>
          <th className="ColumnTitle">Sub-total</th>
          <th className="ColumnTitle">Remover item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((product, index) => {
            const subTotal = Number(product.price) * product.quantity;
            console.log(product);
            return (
              <tr key={ index } className="TableRow">
                <TableRowItems
                  testIdPrefix="customer_checkout"
                  itemNumber={ index + 1 }
                  description={ product.name }
                  quantity={ product.quantity }
                  unityValue={ Number(product.price) }
                  subTotal={ subTotal }
                />
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    className="ItemButtonRemove ItemRow"
                    onClick={ () => handleRemove(product.id, subTotal) }
                  >
                    REMOVER
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

import PropTypes from 'prop-types';
import React from 'react';
import TableRowItems from './TableRowItems';
import './Table.css';

export default function OrderDetailsTable({ userType, orders }) {
  return (
    <table className="Table">
      <thead>
        <tr className="TableRow">
          <th className="ColumnTitle">Item</th>
          <th className="ColumnTitle">Descrição</th>
          <th className="ColumnTitle">Quantidade</th>
          <th className="ColumnTitle">Valor unitário</th>
          <th className="ColumnTitle">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.length > 0 && orders.map(({ product, quantity }, index) => {
            const subTotal = Number(product.price) * quantity;
            return (
              <tr key={ index } className="TableRow">
                <TableRowItems
                  testIdPrefix={ `${userType}_order_details` }
                  itemNumber={ index + 1 }
                  description={ product.name || '' }
                  quantity={ quantity }
                  unityValue={ Number(product.price) || 0 }
                  subTotal={ subTotal }
                />
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ).isRequired,
  userType: PropTypes.string.isRequired,
};

import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';
import formatToPrice from '../../helpers/formatToPrice';
import './CardTotalPrice.css';

export default function CustomerOrderTotalPrice({ testIdPrefix }) {
  const { totalPrice } = useContext(CartContext);
  return (
    <div className="CardTotalPrice">
      Total Price: R$
      <span data-testid={ `${testIdPrefix}__element-order-total-price` }>
        { ` ${formatToPrice(totalPrice)}` }
      </span>
    </div>
  );
}

CustomerOrderTotalPrice.propTypes = {
  testIdPrefix: PropTypes.string.isRequired,
};

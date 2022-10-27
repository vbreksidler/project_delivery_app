import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function botaoVerdeEscuro({ placeholder, click, isDisabled }) {
  return (

    <button
      disabled={ isDisabled }
      className={ styles.button }
      type="button"
      onClick={ click }
      data-testid="customer_products__button-cart"
    >
      <p>
        VerCarrinho:  R$
      </p>
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        {(placeholder.toFixed(2)).replace('.', ',')}
      </p>
    </button>

  );
}

botaoVerdeEscuro.propTypes = {
  placeholder: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default botaoVerdeEscuro;

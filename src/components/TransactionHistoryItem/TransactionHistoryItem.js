import React from 'react';
import T from 'prop-types';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: T.string.isRequired,
  amount: T.string.isRequired,
  currency: T.string.isRequired,
};

export default TransactionHistoryItem;

import React from 'react';
import T from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

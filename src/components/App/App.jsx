import React from 'react';
import Statistics from '../Statistics/Statistics';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import friends from '../../data/friends';
import user from '../../data/user';
import statistics from '../../data/statistical-data';
import transactions from '../../data/transactions';
import styles from './App.module.css';

const App = () => (
  <div className={styles.flexbox}>
    <Profile user={user} />
    <Statistics data={statistics} title="File upload" />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;

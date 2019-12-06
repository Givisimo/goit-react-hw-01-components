import React from 'react';
import T from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      />
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  isOnline: T.bool.isRequired,
};

export default FriendListItem;

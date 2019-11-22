import React from 'react';
import T from 'prop-types';
import FriendListItem from '../FriendsListItem/FriendsListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;

import React from 'react';
import T from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ data, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={styles['stat-list']}>
        {data.length > 0 &&
          data.map(item => (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
  title: T.string,
};

export default Statistics;

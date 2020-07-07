import React from 'react';
import styles from './Counter.module.scss';
import { CounterProps } from './Counter.Props';

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    const { color, count } = props;

    const numberColor = color === 'white' ? '#0078D4' : '';

    return (
        <div className={styles.outerBoxUnfocused} style={{ backgroundColor: color }}>
            <div className={styles.innerBoxUnfocused} style={{ color: numberColor }}>
                {count}
            </div>
        </div>
    );
};

Counter.defaultProps = {
    count: 0,
    color: '#0078D4',
};

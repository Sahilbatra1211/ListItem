import React from 'react';
import { CheckBoxProps } from '../schema/CheckBox.Props';
import styles from './CheckBox.module.scss';

export const CheckBox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
    const { name, disabled, checked, onChange, value } = props;

    return (
        <div className={styles.checkBox}>
            <input
                type="checkbox"
                name={name}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

CheckBox.defaultProps = {
    disabled: false,
    checked: false,
    onChange: () => {},
};

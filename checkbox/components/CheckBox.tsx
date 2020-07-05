import React from 'react';
import { CheckboxProps } from '../schema/Checkbox.Props';
import styles from './Checkbox.module.scss';

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
    const { name, disabled, checked, onChange, value, color } = props;

    const colorCls = color === 'white' ? styles.checkboxWhite : styles.checkboxBlue;

    return (
        <div className={colorCls}>
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

Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    onChange: () => {},
};

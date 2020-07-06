import React from 'react';
import styles from './CheckBox.module.scss';
import { CheckBoxProps } from '../schema/CheckBox.Props';

export const CheckBox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
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

CheckBox.defaultProps = {
    disabled: false,
    checked: false,
    onChange: () => { },
};

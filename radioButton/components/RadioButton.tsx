import React from 'react';
import { RadioButtonProps } from '../schema/RadioButton.Props';
import styles from './RadioButton.module.scss';

export const RadioButton: React.FC<RadioButtonProps> = (props: RadioButtonProps) => {
    let { name, disabled, checked, onChange, value, color } = props;

    const border = checked ? `1.5px solid ${color}` : '';
    const colorCls = color === 'white' ? styles.radioButtonWhite : styles.radioButtonBlue;

    const check = () => {
        if (checked === true && disabled === true) checked = false;
    };

    return (
        <div className={colorCls} style={{ border: border }}>
            {check()}
            <input
                type="radio"
                name={name}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

RadioButton.defaultProps = {
    disabled: false,
    checked: false,
    onChange: () => {},
    color: '#0078D4',
};

import React from 'react';
import { RadioButtonProps } from '../schema/RadioButton.Props';
import styles from './RadioButton.module.scss';

export const RadioButton: React.FC<RadioButtonProps> = (props: RadioButtonProps) => {
    let { name, disabled, checked, onChange, value } = props;
    const border = checked ? '1.5px solid #0078D4' : '';

    const check = () => {
        if (checked == true && disabled == true) checked = false;
    };

    return (
        <div className={styles.radioButton} style={{ border: border }}>
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
};

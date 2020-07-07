import React from 'react';
import styles from './ListItemCheckbox.module.scss';
import { Icon } from '../../icon/components/Icon';
import { ListItemCheckboxProps as props } from '.././ListItemCheckbox.Props';
import { Persona } from '../../Personas/components/Persona';

export const GetLeftContent = (props) => {
    let LeftContent;
    if (props.leftIcon) {
        LeftContent = (
            <>
                <Icon iconName={props.leftIconName}></Icon>
            </>
        );
    } else if (props.leftPersona) {
        LeftContent = (
            <>
                <Persona
                    personaImageSources={props.leftPersonaSrc}
                    personaSize={props.listSize === 'Medium' ? 2 : 1}></Persona>
            </>
        );
    } else {
        LeftContent = <></>;
    }
    return LeftContent;
}

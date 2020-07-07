<<<<<<< HEAD
import React, { useEffect, useState, useContext } from 'react';
=======
import React, { useContext, useEffect, useState } from 'react';
>>>>>>> a489a779c6e721a4e9302e9ea7e0e6d285adafe5
import styles from './ListItem.module.scss';
import { Checkbox } from '../checkbox/components/Checkbox';
import { Icon } from '../icon/components/Icon';
import { ListItemProps } from './ListItem.Props';
import { Persona } from '../Personas/components/Persona';
import { RadioButton } from '../radioButton/components/RadioButton';
<<<<<<< HEAD
import { userContext } from '../tabBarContext/TabBarContext'
=======
import { userContext } from '../tabBarContext/TabBarContext';
>>>>>>> a489a779c6e721a4e9302e9ea7e0e6d285adafe5
//import { Base } from '../Bases/Base';

const ListItem = React.memo<ListItemProps>((props) => {
    const [isActive, setIsActive] = useState(false);
    const tabBarContext = useContext(userContext);

    const { fowardRef: forwardRef, onEnter } = props;
    const itemRef = forwardRef;

    useEffect(() => {

        const component = forwardRef.current;

        const onFocus = () => {
            setIsActive(true);
            //@ts-ignore
            tabBarContext.dispatch({ type: 'centerCallback', value: onEnter });
        };

        const onBlur = () => {
            setIsActive(false);
        };

        component.addEventListener('focus', onFocus);
        component.addEventListener('blur', onBlur);

        return () => {
            component.removeEventListener('focus', onFocus);
            component.removeEventListener('blur', onBlur);
        };
    }, [forwardRef]);

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

    let RightContent;
    if (props.rightIconName === 'radiobutton') {
        RightContent = <RadioButton></RadioButton>;
    } else if (props.rightIconName === 'Checkbox') {
<<<<<<< HEAD
        RightContent = <Checkbox onChange={() => { }}></Checkbox>;
=======
        RightContent = <CheckBox onChange={() => { }}></CheckBox>;
>>>>>>> a489a779c6e721a4e9302e9ea7e0e6d285adafe5
    } else if (props.rightIconName === 'arrowbutton') {
        RightContent = <Icon iconName="chevron"></Icon>;
    }

    return (
        <div
            tabIndex={0}
            ref={itemRef}
<<<<<<< HEAD
            className={`${styles.itemList} ${props.leftIcon ? `${styles.itemListIcon}` : ''} ${
                props.leftPersona
                    ? `${
                    props.listSize === 'Medium'
                        ? `${styles.itemListPersonsMedium}`
                        : `${styles.itemListPersonaSmall}`
                    }`
                    : ''
                }`}
            onClick={onEnter}>
            <div
                className={`${styles.leftContent} ${props.leftIcon ? `${styles.leftIcon}` : ''} ${
                    props.leftPersona
                        ? `${
                        props.listSize === 'Medium'
                            ? `${styles.leftPersonsMedium}`
                            : `${styles.leftPersonaSmall}`
                        }`
                        : ''
=======
            className={`${styles.itemList} ${props.leftIcon ? `${styles.itemListIcon}` : ''} ${props.leftPersona
                ? `${props.listSize === 'Medium'
                    ? `${styles.itemListPersonsMedium}`
                    : `${styles.itemListPersonaSmall}`
                }`
                : ''
                }`}
            onClick={onEnter}>
            <div
                className={`${styles.leftContent} ${props.leftIcon ? `${styles.leftIcon}` : ''} ${props.leftPersona
                    ? `${props.listSize === 'Medium'
                        ? `${styles.leftPersonsMedium}`
                        : `${styles.leftPersonaSmall}`
                    }`
                    : ''
>>>>>>> a489a779c6e721a4e9302e9ea7e0e6d285adafe5
                    }`}>
                {LeftContent}
            </div>
            <div className={styles.textContainer}>
                <div
<<<<<<< HEAD
                    className={`${
                        props.leftIcon ? `${styles.iconPrimaryText}` : `${styles.primaryText}`
=======
                    className={`${props.leftIcon ? `${styles.iconPrimaryText}` : `${styles.primaryText}`
>>>>>>> a489a779c6e721a4e9302e9ea7e0e6d285adafe5
                        }`}>
                    {props.primaryText}
                </div>
                <div className={styles.secondaryText}>{props.secondaryText}</div>
            </div>
            <div className={styles.rightContent}>{RightContent}</div>
        </div>
    );
});

export default React.forwardRef((props: ListItemProps, ref) => (
    <ListItem fowardRef={ref} {...props} />
));

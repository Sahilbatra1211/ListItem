import React, { useContext, useEffect, useState } from 'react';
import styles from './ListItemCheckbox.module.scss';
import { CheckBox } from '../checkbox/components/CheckBox';
import { GetLeftContent } from './utils/GetLeftContent';
import { Icon } from '../icon/components/Icon';
import { ListItemCheckboxProps } from './ListItemCheckbox.Props';
import { Persona } from '../Personas/components/Persona';
import { userContext } from '../tabBarContext/TabBarContext';

//import { Base } from '../Bases/Base';

const ListItemCheckBox = React.memo<ListItemCheckboxProps>((props) => {
    const [isActive, setIsActive] = useState(false);
    const tabBarContext = useContext(userContext);

    const { forwardRef: forwardRef, onEnter } = props;
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

    let LeftContent = (
        <GetLeftContent {...props}></GetLeftContent>
    );
    // if (props.leftIcon) {
    //     LeftContent = (
    //         <>
    //             <Icon iconName={props.leftIconName}></Icon>
    //         </>
    //     );
    // } else if (props.leftPersona) {
    //     LeftContent = (
    //         <>
    //             <Persona
    //                 personaImageSources={props.leftPersonaSrc}
    //                 personaSize={props.listSize === 'Medium' ? 2 : 1}></Persona>
    //         </>
    //     );
    // } else {
    //     LeftContent = <></>;
    // }

    const RightContent = <CheckBox onChange={() => { }}></CheckBox>;

    return (
        <div
            tabIndex={0}
            ref={itemRef}
            className={`${styles.itemList} ${props.leftIcon ? `${styles.itemListIcon}` : ''} ${props.leftPersona
                ? `${props.listSize === 'Medium'
                    ? `${styles.itemListPersonsMedium}`
                    : `${styles.itemListPersonaSmall}`
                }`
                : ''
                } ${isActive ? `${styles.active}` : ''}`}
            onClick={() => { }}>
            <div
                className={`${styles.leftContent} ${props.leftIcon ? `${styles.leftIcon}` : ''} ${props.leftPersona
                    ? `${props.listSize === 'Medium'
                        ? `${styles.leftPersonsMedium}`
                        : `${styles.leftPersonaSmall}`
                    }`
                    : ''
                    }`}>
                {LeftContent}
            </div>
            <div className={styles.textContainer}>
                <div
                    className={`${props.leftIcon ? `${styles.iconPrimaryText}` : `${styles.primaryText}`
                        }`}>
                    {props.primaryText}
                </div>
                <div className={styles.secondaryText}>{props.secondaryText}</div>
            </div>
            <div className={styles.rightContent}>{RightContent}</div>
        </div>
    );
});

export default React.forwardRef((props: ListItemCheckboxProps, ref) => (
    <ListItemCheckBox forwardRef={ref} {...props} />
));

import React, { useContext, useEffect, useState } from 'react';
import styles from './ListItemArrowButton.module.scss';
import { GetLeftContent } from './utils/GetLeftContent';
import { Icon } from '../icon/components/Icon';
import { ListItemArrowButtonProps } from './ListItemArrowButton.Props';
import { Persona } from '../Personas/components/Persona';
import { userContext } from '../tabBarContext/TabBarContext';

//import { Base } from '../Bases/Base';

const ListItemArrowButton = React.memo<ListItemArrowButtonProps>((props) => {
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

    const RightContent = <Icon iconName="chevron"></Icon>;

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

export default React.forwardRef((props: ListItemArrowButtonProps, ref) => (
    <ListItemArrowButton forwardRef={ref} {...props} />
));

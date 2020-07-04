import React, { useEffect, useState } from 'react';
import { ListItemProps } from './ListItem.Props';
import styles from './ListItem.module.scss';

const ListItem = React.memo<ListItemProps>(
    props => {

        const [isActive, setIsActive] = useState(false);

        const { fowardRef, onClick } = props;
        const itemRef = fowardRef;

        useEffect(
            () => {
                console.log('in listitem useeffect');
                console.log(fowardRef);
                const component = fowardRef.current;

                const onFocus = () => {
                    setIsActive(true);
                    console.log('focus');
                }

                const onBlur = () => {
                    setIsActive(false);
                    console.log('blur');
                }


                component.addEventListener('focus', onFocus);
                component.addEventListener('blur', onBlur);

                return () => {
                    component.removeEventListener('focus', onFocus);
                    component.removeEventListener('blur', onBlur);
                };
            }, [fowardRef]
        );

        return (
            <div tabIndex={0} ref={itemRef} className={styles.itemList} onClick={onClick}>
                sdgdg fhggfhhiiii
            </div>
        );
    }
);

export default React.forwardRef((props: ListItemProps, ref) => (
    <ListItem
        fowardRef={ref}
        {...props}
    />
));
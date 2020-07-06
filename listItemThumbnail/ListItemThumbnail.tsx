import React, { useEffect, useState } from 'react';
import styles from './ListItemThumbnail.module.scss';
import { Checkbox } from '../checkbox/components/Checkbox';
import { Icon } from '../icon/components/Icon';
import { ListItemThumbnailProps } from './ListItemThumbnail.Props';
import { NewsThumbnail } from '../kaios-newsThumbnail/components/NewsThumbnail';
import { Persona } from '../Personas/components/Persona';
import { RadioButton } from '../radioButton/components/RadioButton';
//import { Base } from '../Bases/Base';

const ListItemThumbnail = React.memo<ListItemThumbnailProps>((props) => {
    const [isActive, setIsActive] = useState(false);

    const { fowardRef: forwardRef, onClick } = props;
    const itemRef = forwardRef;

    useEffect(() => {
        console.log('in listitem useEffect');
        console.log(forwardRef);
        const component = forwardRef.current;

        const onFocus = () => {
            setIsActive(true);
            console.log('focus');
        };

        const onBlur = () => {
            setIsActive(false);
            console.log('blur');
        };

        component.addEventListener('focus', onFocus);
        component.addEventListener('blur', onBlur);

        return () => {
            component.removeEventListener('focus', onFocus);
            component.removeEventListener('blur', onBlur);
        };
    }, [forwardRef]);

    return (
        <div tabIndex={0} ref={itemRef} className={styles.itemList} onClick={onClick}>
            <div>
                <div>
                    <NewsThumbnail size={props.thumbnailSize}></NewsThumbnail>
                </div>
                <div className={styles.newsTopic}>{props.newsTopic}</div>
                <div className={styles.primaryText}>{props.primaryText}</div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
});

export default React.forwardRef((props: ListItemThumbnailProps, ref) => (
    <ListItemThumbnail fowardRef={ref} {...props} />
));

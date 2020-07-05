import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ListViewProps } from './ListView.Props';

export const ListView: React.FC<ListViewProps> = (props: ListViewProps) => {
    const [activeItem, setActiveItem] = useState(0);
    const itemRefs: any[] = [];

    const setFocusToIndex = useCallback(
        (index) => {
            if (itemRefs[index]) {
                const elem: any | null = ReactDOM.findDOMNode(itemRefs[index].current);
                if (elem) {
                    setActiveItem(index);
                    elem.focus();
                }
            }
        },
        [itemRefs]
    );

    const handleKeyDown = useCallback(
        (e) => {
            let index = activeItem;
            //   if (!isActive) {
            //     return;
            //   }

            switch (e.key) {
                case 'ArrowUp':
                    // looping to bottom
                    index = index - 1 >= 0 ? index - 1 : index;
                    setFocusToIndex(index);

                    break;
                case 'ArrowDown':
                    // looping to top
                    index = index + 1 < itemRefs.length ? index + 1 : index;
                    setFocusToIndex(index);
                    break;
                //TODO: Handle right to go to next (if enabled)
                default:
                    break;
            }
        },
        [activeItem, itemRefs]
    );

    useEffect(() => {
        //@ts-ignore
        console.log('xyz');
        console.log(itemRefs[0]);

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown, itemRefs]);

    const renderChildren = () => {
        let index = -1;
        return React.Children.map(props.children, (child) => {
            console.log('litview rendered');
            index++;
            const newRef = React.createRef();
            itemRefs[index] = newRef;

            return React.cloneElement(child, {
                ref: newRef,
            });
        });
    };
    return (
        <div>
            {console.log('rendered')}
            {renderChildren()}
        </div>
    );
};

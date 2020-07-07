import React, { useCallback, useEffect } from 'react';
import { TabBarProps } from '../schema/TabBar.Props';
import styles from './TabBar.module.scss';
import { handleButtonClick, handleCheckFocus } from '../utils/handleButtonFunc';
import s from '../../globals/tempVariable.scss';

export const TabBar: React.FC<TabBarProps> = (props: TabBarProps) => {
    const {
        leftCallback,
        rightCallback,
        centerCallback,
        leftText,
        rightText,
        centerText,
        backgroundColor,
        fontColor,
    } = props;

    const handleKeyDown = useCallback(
        e => {
            switch (e.key) {
                case 'SoftLeft':
                    if (leftCallback) leftCallback();
                    break;
                case 'SoftRight':
                    if (rightCallback) rightCallback();
                    break;
                case 'Enter':
                    if (centerCallback) centerCallback();
                    break;
                default:
                    break;
            }
        },
        [leftCallback, rightCallback, centerCallback]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const textButton = [
        { text: leftText, callback: leftCallback },
        { text: centerText, callback: centerCallback, fontSize: s.tabBar_fontSizeLarge },
        { text: rightText, callback: rightCallback },
    ];

    return (
        <div className={styles.kaiSoftkey} style={{ backgroundColor: backgroundColor }}>
            {textButton.map((item, index) => {
                return (
                    <button
                        key={index}
                        //@ts-ignore
                        onClick={event => handleButtonClick(event, item.callback)}
                        onFocus={handleCheckFocus}
                        className={styles.kaiSoftkeyBtn}
                        style={{
                            color: fontColor,
                            backgroundColor: backgroundColor,
                            fontSize: `${item.fontSize}`,
                        }}>
                        {item.text}
                    </button>
                );
            })}
        </div>
    );
};

TabBar.defaultProps = {
    leftCallback: () => {},
    rightCallback: () => {},
    centerCallback: () => {},
    fontColor: 'black',
    backgroundColor: '#F1F1F1',
};

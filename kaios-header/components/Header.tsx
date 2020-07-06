import * as React from 'react';
import image from '../assets/image.png';
import style from './Header.module.scss';
import { headerProps } from '../schema/HeaderProps';
import { Icon } from './Icon';

export const Header: React.FC<headerProps> = (props: headerProps) => (
    <div className={`${style.header} ${style[`${props.theme}`]} ${style[`${props.base}`]}`}>
        <Icon imgSrc={image}></Icon>
        <span className={style.headerText}>{props.text}</span>
    </div>
);

Header.defaultProps = {
    text: 'Heading',
    theme: 'white',
    base: 'normal',
};

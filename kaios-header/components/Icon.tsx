import * as React from 'react';
import style from './Icon.module.scss';
import { iconProps } from '../schema/IconProps';

export const Icon: React.FC<iconProps> = (props: iconProps) => (
    <span className={style.headerImg}>
        <img src={props.imgSrc} alt="" className={style.img} />
    </span>
);

Icon.defaultProps = {};

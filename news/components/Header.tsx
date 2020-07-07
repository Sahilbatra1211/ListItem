import * as React from 'react';
import s from './Header.scss';
import { getHeaderStyles } from '../selectors/getStyles';
import { IProps } from '../schema/HeaderProps.js';

export const Header: React.FC<IProps> = (props: IProps) => (
    <div className={s.header} style={getHeaderStyles()}>
        {props.name}
    </div>
);

Header.defaultProps = {
    name: 'News',
};

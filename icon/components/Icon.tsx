import React from 'react';
import { IconProps } from '../schema/Icon.Props';
import { IconSvgs } from './IconSvgs';

export const Icon: React.FC<IconProps> = (props: IconProps) => {
    const { color, iconName, width, height } = props;

    return <IconSvgs color={color} iconName={iconName} width={width} height={height} />;
};

Icon.defaultProps = {
    iconName: 'share',
    width: 0,
    height: 0,
    color: '#0078D4',
};

import * as React from 'react';
import image from '../assets/image.png';
import style from './NewsThumbnail.module.scss';
import { NewsThumbnailProps } from '../schema/NewsThumbnailProps';

export const NewsThumbnail: React.FC<NewsThumbnailProps> = (props: NewsThumbnailProps) => (
    <div className={`${style[`${props.size}`]}`}>
        <img className={`${style.image} ${style[`${props.size}`]}`} src={image} alt="this is alt" />
    </div>
);

NewsThumbnail.defaultProps = {
    size: 'Medium',
};

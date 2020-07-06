import * as React from 'react';
import style from './Message.module.scss';
import { messageProps } from '../schema/MessageProps';

export const Message: React.FC<messageProps> = (props: messageProps) => (
    <div
        className={`${style.message} ${props.isSelected ? `${style.messageSelected}` : ''}
                            ${
                                props.isSender
                                    ? `${style.messageSender}`
                                    : `${style.messageReceiver}`
                            }`}>
        <div
            className={`${style.messageTime} ${
                props.isSender ? `${style.messageTimeSender}` : `${style.messageTimeReceiver}`
            }`}>
            <div>{props.messageDay}</div>

            <div className={style.dayTimeSeparator}>.</div>

            <div>{props.messageTime}</div>
        </div>

        <div>
            <span className={`${style.messageText}`}>{props.text}</span>
        </div>
    </div>
);

Message.defaultProps = {
    isSelected: false,
    isSender: false,
};

export interface messageProps {
    /**Describes the text for message */
    text?: string;
    /**Describes if the message is focused */
    isSelected?: boolean;
    /**Describes if the message is sent or received */
    isSender?: boolean;
    /**Describe the sent/received time of message */
    messageTime?: string;
    /**Describes the date/day of message */
    messageDay?: string;
}

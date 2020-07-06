type CallbackFunction = (...args: any[]) => void;

export interface TabBarProps {
    /** Left text of tab bar*/
    leftText: string;
    /** Center text of tab bar*/
    centerText: string;
    /** Right text of tab bar*/
    rightText: string;
    /** Background Color text of tab bar*/
    backgroundColor: string;
    /** Font Color of tab bar*/
    fontColor: string;
    /** Callback for left soft key*/
    leftCallback: CallbackFunction;
    /** Callback for center soft key*/
    centerCallback: CallbackFunction;
    /** Callback for right soft key*/
    rightCallback: CallbackFunction;
}

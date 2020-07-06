export interface CheckBoxProps {
    /**Name of check box */
    name?: string;
    /**Value of check box */
    value?: any[];
    /**Callback function for onChange of check box*/
    onChange: (...args: any[]) => void;
    /**To make check box checked*/
    checked?: boolean;
    /**To make check box disabled */
    disabled?: boolean;
    /**color white|blue */
    color?: string;
}

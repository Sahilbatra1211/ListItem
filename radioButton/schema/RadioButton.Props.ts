export interface RadioButtonProps {
    /**Name of radio button */
    name?: string;
    /**Value of radio button */
    value?: any[];
    /**Callback function for onChange of radio button*/
    onChange?: (...args: any[]) => void;
    /**To make radio button checked*/
    checked?: boolean;
    /**To make radio button disabled */
    disabled?: boolean;
}

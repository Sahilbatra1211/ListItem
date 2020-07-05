export interface ListItemProps {
    /** foward ref to list view */
    fowardRef?: any;
    /**If left icon is there*/
    leftIcon?: boolean;
    /**if left persona is there */
    leftPersona?: boolean;
    /**if left person is passed true then pass the src */
    leftPersonaSrc?: Array<string>;
    /** if left icon is true pass the icon name by default chevron */
    leftIconName?: string;
    primaryText?: string;
    secondaryText?: string;
    rightIconName?: string;
    listSize?: 'Small' | 'Medium';
    /**callback for onclick */
    onClick?: (...args: any[]) => any;
}

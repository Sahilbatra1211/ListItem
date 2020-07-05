export interface ListItemThumbnailProps {
    /** foward ref to list view */
    fowardRef?: any;
    thumbnailSize?: 'Medium' | 'Grid' | 'List';
    newsTopic?: string;
    primaryText?: string;
    secondaryText?: string;
    rightIconName?: string;
    /**callback for onclick */
    onClick?: (...args: any[]) => any;
}

export interface PersonaProps {
    /**
     * Primary text, usually the name of the person
	 * @defaultvalue 'persona'
     */
	primaryText?: string;

    /**
	 * Size of the persona - 0/1/2 in increasing order of size
     * @defaultvalue 2
     */
	personaSize?: PersonaSize;

    /**
     * Alt text for the image to use
	 * @defaultvalue 'persona'
     */
	personaImageAlt?: string;

    /**
     * The user's initials (max. 2 letters) to display in place of image when image sources is not passed
     * @defaultvalue ''
     */
	personaInitials?: string;

    /**
     * A random background color automatically selected from a pool when the user's initials are displayed
     */
	initialsColor?: PersonaInitialsColor;

    /**
     * Additional CSS class(es) to apply to the Persona
	 * @defaultvalue ''
     */
	personaClassName?: string;

    /**
     * Additional CSS class to apply to the image
	 * @defaultvalue ''
     */
	imageClassName?: string;

    /**
     * Boolean for verification badge
	 * @defaultvalue false
     */
	isVerified?: boolean;

    /**
     * Boolean for Multiple Recipients styling
	 * @defaultvalue false
     */
	isMultipleRecipientPersona?: boolean;

    /**
     * List of 1 to 4 image sources
	 * 1 - Single Persona
	 * 2/3/4 - Grouped Persona
	 * @defaultvalue []
     */
	personaImageSources?: Array<string>;

	/**
	 * Image to be displayed when neither Initials nor persona image sources are passed
	 * Uses Default image stored if not passed
	 */
	personaImageFallBack?: string;

	/**
	 * Badge to be displayed when the persona is to be marked verified
	 * Uses default badge stored if not passed
	 */
	personaVerificationBadge?: string;
}

export enum PersonaSize {
	extraSmall = 0,
	small = 1,
	medium = 2,
}

export enum PersonaInitialsColor {
	blue = 0,
	yellow = 1,
	lightGreen = 2,
	green = 3,
	red = 4,
}



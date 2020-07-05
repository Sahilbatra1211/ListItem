export interface BaseProps {
    /**
     * defaultvalue PersonaSize.medium
     */
	baseType?: BaseType;

	baseTheme?: string;

	isAriaHidden?: boolean;

    /**
     * Additional CSS class(es) to apply to the Persona
     */
	baseClassName?: string;
}

export enum BaseType {
	listItem = 0,
	gridItem = 1,
	medium = 2,
}




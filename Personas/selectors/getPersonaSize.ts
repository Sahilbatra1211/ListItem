import { PersonaSize } from '../schema/Persona.Props';

interface PersonaSizeStyle {
	rootIsExtraSmall: string;
	rootIsSmall: string;
	rootIsMedium: string;
}

const getPersonaSize = (styles: PersonaSizeStyle) => {
	return ({
		[PersonaSize.extraSmall]: 'Persona--xs ' + styles.rootIsExtraSmall,
		[PersonaSize.small]: 'Persona--sm ' + styles.rootIsSmall,
		[PersonaSize.medium]: 'Persona--md ' + styles.rootIsMedium,
	})
};

export default getPersonaSize;
import { PersonaInitialsColor } from '../schema/Persona.Props';

interface PersonaInitialsColorStyle {
	initialsIsblue: string,
	initialsIsyellow: string,
	initialsIslightGreen: string,
	initialsIsgreen: string,
	initialsIsred: string
}

const getPersonaInitialsColor = (styles: PersonaInitialsColorStyle) => ({
	[PersonaInitialsColor.blue]:
		'Persona-initials--blue ' + styles.initialsIsblue,
	[PersonaInitialsColor.yellow]:
		'Persona-initials--yellow ' + styles.initialsIsyellow,
	[PersonaInitialsColor.lightGreen]:
		'Persona-initials--lightGreen ' + styles.initialsIslightGreen,
	[PersonaInitialsColor.green]:
		'Persona-initials--green ' + styles.initialsIsgreen,
	[PersonaInitialsColor.red]:
		'Persona-initials--red ' + styles.initialsIsred,

});

export default getPersonaInitialsColor;
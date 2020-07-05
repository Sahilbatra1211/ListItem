import getPersonaInitialsColor from '../selectors/getPersonaInitialsColor';
import getPersonaSize from '../selectors/getPersonaSize';
import * as React from 'react';
import { PersonaProps, PersonaInitialsColor } from '../schema/Persona.Props';
import { SIZE_TO_PIXELS } from '../data/PersonaConstants';
import unknownPersona from "../assets/unknownPersona.svg";
import verifiedBadge from "../assets/verifiedBadge.png";

// change to import statement once exports are mentioned in scss file
const styles = require('./PersonaStyles.module.scss');
const classNames = require('classnames/bind').bind(styles);

const COLOR_SWATCHES_LOOKUP: PersonaInitialsColor[] = [
	PersonaInitialsColor.blue,
	PersonaInitialsColor.yellow,
	PersonaInitialsColor.lightGreen,
	PersonaInitialsColor.green,
	PersonaInitialsColor.red,
];

const COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
const PERSONA_INITIALS_COLOR = getPersonaInitialsColor(styles);
const PERSONA_SIZE = getPersonaSize(styles);


const getColorFromName = (displayName: string): PersonaInitialsColor => {
	let color = PersonaInitialsColor.lightGreen;
	if (!displayName) {
		return color;
	}
	let hashCode = 0;
	for (let iLen: number = displayName.length - 1; iLen >= 0; iLen--) {
		const ch: number = displayName.charCodeAt(iLen);
		const shift: number = iLen % 8;

		hashCode ^= (ch << shift) + (ch >> (8 - shift));
	}
	color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
	return color;
};

export const Persona: React.FC<PersonaProps> = (props: PersonaProps) => {

	const {
		personaClassName,
		imageClassName,
		personaSize = 2,
		personaImageAlt = 'persona',
		personaInitials,
		personaImageSources = [],
		personaImageFallBack = unknownPersona,
		personaVerificationBadge = verifiedBadge,
		isVerified = false,
		isMultipleRecipientPersona = false,
		primaryText = 'persona',
		initialsColor = getColorFromName(primaryText)
	} = props;

	let PersonaContent;
	const num_of_personaImageSources = personaImageSources.length;
	let groupImageClassName = '';
	switch (num_of_personaImageSources) {
		case 2:
			groupImageClassName = styles.groupContainerTwo
			break;
		case 3:
			groupImageClassName = styles.groupContainerThree
			break;
		case 4:
			groupImageClassName = styles.groupContainerFour
			break;
		default:
			groupImageClassName = '';
	}

	if (num_of_personaImageSources > 0) {
		PersonaContent = (
			<>
				{isMultipleRecipientPersona && (<div
					className={classNames(
						styles.backDiv)}
				/>)
				}
				< div
					className={classNames(
						'kai-grouped-persona-container',
						(num_of_personaImageSources === 1 && isMultipleRecipientPersona && !isVerified) ? styles.multiImageContainer : '',
						(num_of_personaImageSources === 1 && !isMultipleRecipientPersona) ? styles.groupContainerOne : '',
						groupImageClassName
					)}>
					{personaImageSources.map((eachImage: string, listIndex: number) => (
						<div
							className={classNames(
								'kai-persona-group-image-wrapper',
								styles.groupImageWrapper,
							)}
							key={listIndex}>
							<img
								className={classNames(
									'kai-persona-image',
									imageClassName
								)}
								width={SIZE_TO_PIXELS[personaSize]}
								height={SIZE_TO_PIXELS[personaSize]}
								src={eachImage}
								alt={personaImageAlt}
							/>
						</div>
					)
					)}
					{isVerified && (<img
						className={classNames(
							'kai-persona-verification-badge',
							styles.badge,
						)}
						src={personaVerificationBadge}
						alt={personaImageAlt}
					/>)
					}
				</div>
			</>
		)
	}
	else if (personaInitials) {
		PersonaContent = (
			<>
				{isMultipleRecipientPersona && (<div
					className={classNames(
						styles.backDiv)}
				/>)
				}
				<div
					className={classNames(
						'kai-persona-initials',
						(isMultipleRecipientPersona) ? styles.multiImageContainer : '',
						styles.initials,
						PERSONA_INITIALS_COLOR[initialsColor]
					)}
					aria-hidden="true">
					<span>{personaInitials}</span>
				</div >
				{isVerified && (<img
					className={classNames(
						'kai-persona-verification-badge',
						styles.badge,
					)}
					src={personaVerificationBadge}
					alt={personaImageAlt}
				/>)
				}
			</>
		)
	}
	else {
		PersonaContent = (
			<div
				className={classNames(
					'kai-persona-fallbackImageWrapper',
					styles.initials,
					PERSONA_INITIALS_COLOR[initialsColor]
				)}
				aria-hidden="true">
				<img
					className={classNames(
						'kai-persona-fallback-image',
						styles.icon,
					)}
					src={personaImageFallBack}
					alt={personaImageAlt}
				/>
			</div >
		)
	}
	return (
		<div
			className={classNames(
				'kai-persona',
				styles.root,
				personaClassName,
				PERSONA_SIZE[personaSize]
			)}>
			<div
				className={classNames(
					'kai-persona-imageArea',
					styles.imageArea
				)}>
				{PersonaContent}
			</div>
		</div>
	);
};

Persona.defaultProps = {

	personaClassName: '',

	imageClassName: '',

	personaSize: 2,

	personaImageAlt: 'persona',

	personaInitials: '',

	personaImageSources: [],

	personaImageFallBack: unknownPersona,

	personaVerificationBadge: verifiedBadge,

	isVerified: false,

	isMultipleRecipientPersona: false,

	primaryText: 'persona',

	initialsColor: undefined
};
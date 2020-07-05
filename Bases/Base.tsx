import * as React from 'react';
import getBaseType from './getBaseType';
import { BaseProps } from './Base.props';

const styles = require('./Base.module.scss');
const classNames = require('classnames/bind').bind(styles);

const BASE_TYPE = getBaseType(styles);

export const Base = React.forwardRef<HTMLDivElement, BaseProps>((props, ref) => {
	const fallbackRef = React.useRef<HTMLDivElement>(null);
	const baseRef = ref ?? fallbackRef;

	const prefixClass = styles.base;
	const {
		baseClassName,
		baseType = 0,
		baseTheme = 'defaultTheme',
		isAriaHidden = true,
	} = props;

	return (
		<div
			className={classNames(
				'kai-base',
				baseClassName,
				prefixClass,
				styles[baseTheme],
				BASE_TYPE[baseType]
			)}
			aria-hidden={isAriaHidden}
			ref={baseRef}
			tabIndex={0}>
		</div>
	);
});


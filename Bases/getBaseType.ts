import { BaseType } from './Base.props';

interface BaseStyle {
	baseIsListItem: string;
	baseIsGridItem: string;
	baseIsMedium: string;
}

const getBaseType = (styles: BaseStyle) => {
	return ({
		[BaseType.listItem]: 'Base--listItem ' + styles.baseIsListItem,
		[BaseType.gridItem]: 'Base--gridItem ' + styles.baseIsGridItem,
		[BaseType.medium]: 'Base--md ' + styles.baseIsMedium,
	})
};

export default getBaseType;
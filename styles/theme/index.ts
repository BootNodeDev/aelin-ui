import colors from './colors';
import fonts from './fonts';

export const darkTheme = {
	...colors,
	primary: colors.blue1,
	secondary: colors.white,
	tertiary: colors.grey3,
	background: colors.navy1,
	heading: colors.white,
	borders: colors.blue1,
	textBody: colors.grey3,
	textSmall: colors.white,
	textHover: colors.navy1,
	textButton: colors.navy1,
	textSecondaryButton: colors.white,
	textRequired: colors.pink,
	boxesBackground: colors.grey7,
	tooltipBackground: colors.white,
	tooltipText: colors.black,
	tabBorders: colors.blue1,
	tabText: colors.blue1,
	tabBackground: colors.grey7,
	selectedTabBackground: colors.blue1,
	selectedTabText: colors.navy1,
	tablePrimary: colors.grey6,
	tableSecondary: colors.navy0,
	tableHeaderText: colors.navy1,
	tableBorders: colors.white,
	tableHover: colors.blue1,
	buttonPrimary: colors.blue1,
	buttonSecondary: colors.grey6,
	buttonDisabled: colors.blue0,
	inputBackground: colors.grey6,
	inputBorders: colors.grey2,
	headerPrimary: colors.navy0,
	selectedHeaderButton: colors.blue1,
	selectedHeaderButtonBackground: colors.grey8,
	inputGroupIconDisabled: colors.grey8,
	inputGroupIcon: colors.grey2,
	questionMarkBorder: colors.white,
	questionMarkText: colors.white,
	questionMarkBody: colors.grey6,
	paginationText: colors.grey2,
	headerLinkBackgroundActive: colors.grey6,
	headerLinkTextActive: colors.blue1,
	headerDropdownHover: colors.grey6,
	notificationBackground: colors.blue1,
};

export const lightTheme = {
	...colors,
	primary: colors.green4,
	secondary: colors.grey0,
	tertiary: colors.white,
	background: colors.white,
	heading: colors.green4,
	borders: colors.grey4,
	textBody: colors.black,
	textSmall: colors.grey5,
	textHover: colors.white,
	textButton: colors.white,
	textSecondaryButton: colors.green4,
	textRequired: colors.pink,
	boxesBackground: colors.grey0,
	tooltipBackground: colors.green4,
	tooltipText: colors.white,
	tabBorders: colors.green4,
	tabText: colors.green4,
	tabBackground: colors.white,
	selectedTabBackground: colors.green4,
	selectedTabText: colors.white,
	tablePrimary: colors.grey1,
	tableSecondary: colors.grey0,
	tableHeaderText: colors.white,
	tableBorders: colors.grey4,
	tableHover: colors.green4,
	buttonPrimary: colors.green4,
	buttonSecondary: colors.white,
	buttonDisabled: colors.green1,
	inputBackground: colors.grey1,
	inputBorders: colors.grey4,
	headerPrimary: colors.green0,
	selectedHeaderButton: colors.white,
	selectedHeaderButtonBackground: colors.green4,
	inputGroupIconDisabled: colors.grey2,
	inputGroupIcon: colors.black,
	questionMarkBorder: colors.grey5,
	questionMarkBody: colors.grey4,
	questionMarkText: colors.black,
	paginationText: colors.black,
	headerLinkBackgroundActive: colors.green4,
	headerLinkTextActive: colors.white,
	headerDropdownHover: colors.grey4,
	notificationBackground: colors.white,
};

const themeConfig = { darkTheme, lightTheme, fonts };

export type ThemeInterface = {
	colors: typeof darkTheme | typeof lightTheme;
	fonts: typeof fonts;
};

export enum ThemeMode {
	DARK = 'dark',
	LIGHT = 'light',
}

export default themeConfig;

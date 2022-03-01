import { ColorValue, StyleSheet } from 'react-native';

export interface ISpacing {
    xs: number;
    s: number;
    sm: number;
    m: number;
    md: number;
    l: number;
    xl: number;
    xxl: number;
}

export interface ILineHeight {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    p: number;
    small: number;
    text: number;
}

export interface ILetterSpacing {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    p: number;
    small: number;
    text: number;
}

export interface ISize {
        // Common Sizes
        base: number;
        text:  number;
        padding:  number;
    
        // Text Sizes
        h1?:  number;
        h2?:  number;
        h3?:  number;
        h4?:  number;
        p?:  number;
    
        // Button Sizes
        buttonRadius?: number;
        buttonHeight?:  number;
        buttonBorder?: number;
    
        // Input Sizes
        inputHeight?:  number;
        inputRadius?: number;
        inputBorder?: number | string;  
}

export interface IFontWeight {
    bold?: string;
    semiBold?: string;
    simple?: string;
    light?: string;
}

export interface IColors {
    primary: ColorValue;
    secondary: ColorValue;
    tertiary: ColorValue;
    text: ColorValue;

    success: ColorValue;
    warning: ColorValue;
    error: ColorValue;

    white: ColorValue;
    black: ColorValue;

    buttonBorder: ColorValue;
    inputBorder: ColorValue;
}

export interface ITheme {
    sizes: ISize & ISpacing;
    fontWeights: IFontWeight;
    lines: ILineHeight;
    letters: ILetterSpacing;
    colors: IColors;
}

export const TEXT_SIZE = 16;

export const SIZES = {
    // Common Sizes
    base: 8,
    text: TEXT_SIZE,
    padding: 24,

    // Text Sizes
    h1: TEXT_SIZE + (2 * 8),
    h2: TEXT_SIZE + (2 * 6),
    h3: TEXT_SIZE + (2 * 4),
    h4: TEXT_SIZE + (2 * 2),
    p: TEXT_SIZE + (2 * 1),
    small: TEXT_SIZE - 2,


    // Button Sizes
    buttonRadius: 8,
    buttonHeight: 48,
    buttonBorder: 0,

    // Input Sizes
    inputHeight: 48,
    inputRadius: 8,
    inputBorder: StyleSheet.hairlineWidth,

}

export const FONT_WEIGHT = {
    bold: "800",
    semiBold : "700",
    simple: "600",
    light: "500",
}

export const LINE_HEIGHTS = {
    h1: Math.round(SIZES.h1 * 1.618),
    h2: Math.round(SIZES.h2 * 1.618),
    h3: Math.round(SIZES.h3 * 1.618),
    h4: Math.round(SIZES.h4 * 1.618),
    p: Math.round(SIZES.p * 1.618),
    small: Math.round(SIZES.small * 1.618),
    text: Math.round(SIZES.text * 1.618),
}

export const COLORS = {
    primary: "#3E8EF4",
    secondary: "#FD9900",
    tertiary: "#FE9EF4",
    text: '#14191F',

    success: "#64BC26",
    warning: "#FD6940",
    error: "#FD2000",

    white: "#FFF",
    black: "#000",

    buttonBorder: "rgba(0, 0, 0, 0.5)",
    inputBorder: "rgba(0, 0, 0, 0.5)",

}

export const LETTER_SPACING = {
    h1: -SIZES.h1 * 0.03,
    h2: -SIZES.h2 * 0.03,
    h3: -SIZES.h3 * 0.03,
    h4: -SIZES.h4 * 0.03,
    p: 0,
    small: 0,
    text: 0,
}

export const SPACING = {
    xs: SIZES.base / 2, // 4,
    s: SIZES.base, // 8
    sm: SIZES.base * 1.5, // 12
    m: SIZES.base * 2, // 16
    md: SIZES.base * 2.5, // 20
    l: SIZES.base * 3, // 24
    xl: SIZES.base * 3.5,
    xxl: SIZES.base * 4,
}

const THEME: ITheme = {
    sizes: { ...SIZES , ...SPACING},
    fontWeights: FONT_WEIGHT,
    lines: LINE_HEIGHTS,
    letters: LETTER_SPACING,
    colors: COLORS
}

export default THEME as ITheme;
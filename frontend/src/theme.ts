import { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core';

// Color definitions in figma here:
// https://www.figma.com/file/aoc0hf7t3uI7wu7ghxi625/LD-library--Desktop?type=design&node-id=1010-307&mode=design&t=vmlqtKSi8F2d0xrb-0
export const colors = {
    // Primary Colors
    navy: '#151B2C',
    blue: '#255ED3',
    purple: '#3D2DCB',
    ash: '#f7f8fa',
    text: '#424242',
    white: '#ffffff',

    // Secondary Colors
    blue50: '#2874F9', // This color is mainly for icon, links.
    red: '#ca2026', // This color is to show users with an error state, delete/cancel action or error message.
    yellow: '#F4D019', // This color is to warn users with an alerting state.
    green: '#0EE094', // This color is to show users a success action, or message or state.

    // Tertiary Colors
    pine: '#1A654E',
    violet: '#6B38A8',
    blue30: '#7594F5',
    yellow50: '#FAF6D1',
    pine50: '#C9E9D3',
    violet50: '#EADEFA',
    coral50: '#F8D5CD',
    purple50: '#DFE1F9',
    pink50: '#F6DBED',

    // Neutral colors
    gray90: '#2F2F2F', // Example: tooltip background color
    gray70: '#848484', // Secondary text color
    gray50: '#DBDBDB', // Example: disabled link, CTA, border
    gray30: '#E3E3E3', // Example: disabled dropdown field, button
    blanket: 'rgba(21, 27, 44, 0.4)', // Use this color covering the content below the modal.

    // OpenStax Colors
    osOrange: '#f47541',
    osBlue: '#002469',
    osRed: '#D4450C',
    osTeal: '#0DC0DC',
    osYellow: '#F4D019',
}

export const screenSizes = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

export const media = {
    mobile: `@media (max-width: ${screenSizes['md']}px)`,
    tablet: `@media (min-width: ${screenSizes['md']}px) and (max-width: ${screenSizes['xl']}px)`,
    desktop: `@media (min-width: ${screenSizes['xl']}px)`,
}

export const theme = {
    colors,
    media,
}

type ThemeT = typeof theme
export type { ThemeT }

type ExtendedCustomColors =
    DefaultMantineColor |
    'osOrange' |
    'blue' |
    'purple' |
    'navy' |
    'white' |
    'ash'

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
    }
}


// https://10015.io/tools/color-shades-generator
// use darken/lighten step 8%, step count 5+-
// link to colors in figma:
// https://www.figma.com/file/aoc0hf7t3uI7wu7ghxi625/LD-library--Desktop?type=design&node-id=1012-363&mode=design&t=vmlqtKSi8F2d0xrb-0
export const mantineTheme: MantineThemeOverride = {
    colors: {
        'osOrange': ['#ffffff', '#fde5db', '#fbc9b5', '#f8ad8e', '#f47541', '#f2591a', '#d7470c', '#b03a0a', '#8a2e08', '#632106'],
        'blue': ['#cedbf6', '#abc2f0', '#88a8ea', '#668fe4', '#255ed3', '#1f4fb0', '#193f8e', '#13306b', '#0d2048', '#071125'],
        'purple': ['#d3d0f4', '#b5aeed', '#968de6', '#776bde', '#3d2dcb', '#3326aa', '#291e88', '#1f1767', '#150f45', '#0b0824'],
        'navy': ['#5c72b1', '#4a5f9a', '#3d4e7f', '#2f3d63', '#151b2c', '#080a10', '#000000', '#000000', '#000000', '#000000'],
        'white': ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
        'ash': ['#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA', '#F7F8FA'],
    },
    primaryColor: 'navy',
    primaryShade: 4,
    fontFamily: 'Helvetica Neue',
}

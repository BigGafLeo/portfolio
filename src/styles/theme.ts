import { DefaultTheme } from 'styled-components';

export const palette = {
  // neutrals
  white: '#FFFFFF',
  dove: '#F9FAFB',
  athens: '#F8F9FB',
  porcelain: '#E7EAF3',
  mystic: '#D0D6E6',
  casper: '#9FAAC4',
  waterloo: '#7A859E',
  comet: '#515A6C',
  gun: '#3D434F',
  tuna: '#31363F',
  mirage: '#1D2026',
  bigstone: '#0B0E14',
  mouse: '#E9E9E9',

  //red
  sefid: '#FFF1F0',
  mistyRose: '#FEE4E2',
  chilly: '#F04438',
  tomato: '#D92D20',

  //orange
  freshDough: '#FFF8F3',
  picoIvory: '#FFF1E7',
  carnival: '#EC8327',
  bamboo: '#DC6803',

  //green
  mintCream: '#F5FFF9',
  softPetals: '#ECFFF3',
  secretGarden: '#12B76A',
  fernGreen: '#2B7858',
  mint: '#9eb8a0',
  mintblue: '#98fbcb',

  //additional
  crisps: '#F3CC66',
  darkCrisps: '#D8A624',
  lightCrisps: '#FFF5DC',
  wisteria: '#A080D5',
  darkWisteria: '#7552B0',
  lightWisteria: '#F2EBFD',
  timide: '#6E78E8',
  darkTimide: '#4145B2',
  lightTimide: '#E2E4FF',
  delft: '#5E97C5',
  darkDelft: '#40739C',
  lightDelft: '#DEF0FE',
  skyDancer: '#2F64B6',
  widowmaker: '#8B9EF7',
  corageBlue: '#4F67C0',
  indigoLight: '#637BD5',

  gradient: 'linear-gradient(90deg, #7040BF 0%, #0B62F4 50.48%, #5BA487 100%)',
};

export const theme: DefaultTheme = {
  colors: {
    background: palette.porcelain,
    text: {
      default: palette.bigstone,
      light: palette.comet,
      green: palette.fernGreen,
      red: palette.chilly,
      orange: palette.bamboo,
    },
    input: {
      label: palette.tuna,
      placeholder: palette.waterloo,
      text: palette.bigstone,
      background: palette.white,
      textReadOnly: palette.comet,
      textDisabled: palette.mystic,
      backgroundDisabled: palette.white,
      borderDisabled: palette.porcelain,
      error: palette.tomato,
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1640,
  },
  shadows: {
    xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
    s: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10',
    m: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
    l: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
    xl: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    xxl: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
  },
  borderSize: {
    xs: '0.5px',
    s: '1px',
    m: '2px',
    l: '3px',
  },
  borderRadiuses: {
    xs: '2px',
    s: '2px',
    m: '4px',
    l: '8px',
    xl: '16px',
    xxl: '80px',
    pill: '9999px',
    round: '50%',
  },
  palette,
  fonts: {
    primary: "'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  fontSizes: {
    tiny: '5px',
    small: '14px',
    medium: '18px',
    large: '24px',
    extraLarge: '64px',
    heading: '2.5em',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '62px',
    tenHeight: '15vh',
  },
} as const;

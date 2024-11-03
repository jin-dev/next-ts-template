import { style } from '@vanilla-extract/css';

export const page = style({
  padding: 50,
});

export const text = style({
  color: 'red',
});

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  height: '100vh',
});

export const header = style({
  backgroundColor: 'lightcoral',
  height: '100px',
});

export const columns = style({
  display: 'flex',
  flexGrow: 1,
});

export const footer = style({
  backgroundColor: 'blueviolet',
  height: '100px',
});

export const nav = style({
  backgroundColor: 'coral',
  flexShrink: 0,
  width: '100px',
});

export const mainContent = style({
  backgroundColor: 'burlywood',
  flexGrow: 1,
});

export const aside = style({
  backgroundColor: 'palevioletred',
  flexShrink: 0,
  width: '100px',
});

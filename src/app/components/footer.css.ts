import { style } from '@vanilla-extract/css';

export const footerStyles = style({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  padding: '2rem 1rem',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const containerStyles = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
});

export const navStyles = style({
  display: 'flex',
  gap: '1rem',
});

export const linkStyles = style({
  color: '#000000',
  textDecoration: 'none',
  fontSize: '0.9rem',
  ':hover': {
    color: '#00BFFF',
  },
});

export const bottomStyles = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  borderTop: '1px solid #444',
  paddingTop: '1rem',
  fontSize: '0.8rem',
});

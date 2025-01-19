// components/Header.css.ts
import { style } from '@vanilla-extract/css';

export const headerStyles = style({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
});

export const logoStyles = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#00BFFF',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const navStyles = style({
  display: 'flex',
  gap: '1.5rem',
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
      flexDirection: 'column',
      backgroundColor: '#1E1E1E',
      position: 'absolute',
      top: '100%',
      right: '0',
      width: '100%',
      zIndex: '10',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    },
  },
});

export const linkStyles = style({
  fontSize: '1rem',
  color: '#000000',
  textDecoration: 'none',
  ':hover': {
    color: '#00BFFF',
    textDecoration: 'underline',
  },
});

export const hamburgerStyles = style({
  display: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  width: '30px',
  height: '30px',
  position: 'relative',
  zIndex: '20',
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
    },
  },
  ':focus': {
    outline: 'none',
  },
});

export const mobileMenuStyles = style({
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
    },
  },
});

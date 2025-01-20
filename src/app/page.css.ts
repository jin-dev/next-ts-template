import { style } from '@vanilla-extract/css';

const breakpoints = {
  mobile: 'screen and (max-width: 768px)',
}

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
  backgroundColor: '#FFFFFF',
  height: '100px',
  '@media' : {
    [breakpoints.mobile]: {
    }
  }
});

export const columns = style({
  display: 'flex',
  flexGrow: 1,
});

export const footer = style({
  backgroundColor: '#FFFFFF',
  height: '100px',
  '@media' : {
    [breakpoints.mobile]: {
      height: 'unset',
    }
  }
});

export const nav = style({
  backgroundColor: '#FFFFFF',
  flexShrink: 0,
  width: '100px',
  '@media' : {
    [breakpoints.mobile]: {
      display: 'none',
    }
  }
});

export const mainContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'FFFFFF',
  flexGrow: 1,
  '@media' : {
    [breakpoints.mobile]: {
      justifyContent: 'unset',
      paddingTop: '20px',
    }
  }
});

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

})

export const mainInput = style({
  padding: '10px',
  minWidth: '335px',
  maxWidth: '500px',
  height: '19px',
  fontSize: '16px',

  border: 'none',
  borderTop: '1px solid #d9d9d9',
  borderBottom: '1px solid #d9d9d9',
  // border: '1px solid #d9d9d9',
 // borderRadius: '24px',
  //boxShadow: '0px 1px 6px rgba(0,0,0,0.1)',
  outline: 'none',
  resize: 'none',
  '@media' : {
    [breakpoints.mobile]: {
     minWidth: '260px',
     maxWidth: '300px',
    }
  }
})

export const inputIconLeft = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: 'auto',
  minHeight: '15px',
  border: 'none',
  borderTop: '1px solid #d9d9d9',
  borderBottom: '1px solid #d9d9d9',
  borderLeft: '1px solid #d9d9d9',
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius:'20px',
})

export const inputIconRight = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: 'auto',
  minHeight: '15px',
  border: 'none',
  borderTop: '1px solid #d9d9d9',
  borderBottom: '1px solid #d9d9d9',
  borderRight: '1px solid #d9d9d9',
  borderTopRightRadius: '20px',
  borderBottomRightRadius:'20px',
})

export const mainLogo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginBottom: '20px',
});

export const aside = style({
  backgroundColor: '#FFFFFF',
  flexShrink: 0,
  width: '100px',
  '@media' : {
    [breakpoints.mobile]: {
      display: 'none',
    }
  }
});

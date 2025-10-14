export const theme = {
  colors: {
    primary: '#002C85',        
    primaryLight: '#0045B5',   
    primaryLightShadow: '#0045b590',   
    secondary: '#00C26D',      
    background: '#FFFFFF',     
    backgroundAlt: '#F6F9FC',  
    gradient:
      'linear-gradient(90deg, #002C85 0%, #0045B5 100%)',
    text: {
      primary: '#1B1B1B',      
      secondary: '#4F4F4F',    
      light: '#FFFFFF',        
    },
    border: '#E0E0E0',      
    success: '#00C26D',
    info: '#2F80ED',
  },

  font: {
    family: "'Poppins', 'Inter', sans-serif",
    size: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.25rem',   // 20px
      xl: '1.5rem',    // 24px
      xxl: '2rem',     // 32px
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },

  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    pill: '9999px',
  },

  shadow: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.15)',
    lg: '0 8px 16px rgba(0,0,0,0.2)',
  },
  card:{
    shadow:'5px 5px 15px -5px #000000'
  },

  breakpoints: {
    mobile: '420px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  },
} as const;

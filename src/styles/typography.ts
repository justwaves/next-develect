import plugin from 'tailwindcss/plugin'

export const typography = plugin(({ addUtilities }) => {
  addUtilities({
    '.label-xs': {
      fontSize: '12px',
      lineHeight: '16px',
    },
    '.label-s': {
      fontSize: '14px',
      lineHeight: '16px',
    },
    '.label-m': {
      fontSize: '16px',
      lineHeight: '20px',
    },
    '.label-l': {
      fontSize: '18px',
      lineHeight: '24px',
    },
    '.paragraph-xs': {
      fontSize: '12px',
      lineHeight: '20px',
    },
    '.paragraph-s': {
      fontSize: '14px',
      lineHeight: '20px',
    },
    '.paragraph-m': {
      fontSize: '16px',
      lineHeight: '24px',
    },
    '.paragraph-l': {
      fontSize: '18px',
      lineHeight: '28px',
    },
    '.heading-xs': {
      fontSize: '20px',
      lineHeight: '28px',
    },
    '.heading-s': {
      fontSize: '24px',
      lineHeight: '32px',
    },
    '.heading-m': {
      fontSize: '32px',
      lineHeight: '40px',
    },
    '.heading-l': {
      fontSize: '40px',
      lineHeight: '52px',
    },
    '.heading-xl': {
      fontSize: '52px',
      lineHeight: '64px',
    },
    '.heading-xxl': {
      fontSize: '96px',
      lineHeight: '112px',
    },
  })
})

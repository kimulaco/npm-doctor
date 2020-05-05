module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '14px',
        'md': '15px',
        'lg': '18px',
        'xl': '32px'
      },
      margin: {
        'sm': '12px',
        'md': '24px',
        'lg': '48px',
        'xl': '72px'
      },
      padding: {
        'sm': '12px',
        'md': '24px',
        'lg': '48px',
        'xl': '72px'
      }
    }
  },
  variants: {},
  plugins: []
}

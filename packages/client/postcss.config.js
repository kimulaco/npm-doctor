let pergeConfig = []

if (process.env.NODE_ENV === 'production') {
  pergeConfig = ['@fullhuman/postcss-purgecss', {
      content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor(content) {
        return content.match(/[\w-/:]+(?<!:)/g) || []
      }
    }
  ]
}

module.exports = {
  plugins: [
    'tailwindcss',
    ...pergeConfig,
    'postcss-preset-env'
  ]
}

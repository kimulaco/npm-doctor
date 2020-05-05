let prodConfig = []

if (process.env.NODE_ENV === 'production') {
  prodConfig = [
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './src/pages/**/*.{js,jsx,ts,tsx}',
          './src/components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor(content) {
          return content.match(/[\w-/:]+(?<!:)/g) || []
        }
      }
    ]
  ]
}

module.exports = {
  plugins: [
    'tailwindcss',
    ...prodConfig,
    'postcss-preset-env'
  ]
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblock: false,
  }
})

module.exports = withNextra({
  reachStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
})

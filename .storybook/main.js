const path = require('path')
const fs = require('fs')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/shared': path.resolve(__dirname, '../src/shared'),
      '@/lib': path.resolve(__dirname, '../src/lib'),
      '@/features': path.resolve(__dirname, '../src/features'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/public': path.resolve(__dirname, '../public'),
      '@emotion/core': getPackageDir('@emotion/react'),
    }

    // @svgr/webpack 사용을 위한 설정
    const rules = config.module.rules
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  babel: async (options) => {
    options.plugins.unshift('babel-plugin-twin')
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
}

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}

const compose = require('compose-function')
const withTp = require('next-transpile-modules')(['layout-kit-react', 'dokz'])
const { withDokz } = require('dokz/dist/plugin')

const composed = compose(withTp, withDokz)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})

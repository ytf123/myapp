module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 37.5,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['ignore', /^.van-/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }
    }
}
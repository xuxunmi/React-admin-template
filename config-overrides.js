// 按需引入antd样式，修改webpack配置
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = override(
    // 按需引入组件、css
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // 自定义主题颜色
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' }
        }
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
)

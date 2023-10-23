const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/ProductService', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: { '^/ProductService': '' }
        }),
        createProxyMiddleware('/OrderService', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/OrderService': '' }
        })
    )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: '/_next/fonts',
                },
            },
        });

        return config;
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: {
            "displayName": true,
            "ssr": true,
            "fileName": true,
            "meaninglessFileNames": ["index", "index.page", "styles"],
            "minify": true,
            "transpileTemplateLiterals": true,
            "pure": true
        },
    },
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],

    async redirects() {
        return [
          {
            source: '/',
            destination: '/auth/login',
            permanent: false,
          },
        ]
    }
}

module.exports = nextConfig

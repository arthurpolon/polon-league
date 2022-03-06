/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

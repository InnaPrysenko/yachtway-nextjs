/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'files.yachtway.com'}, {hostname:'yachtway.com'}],
    },
};

export default nextConfig;

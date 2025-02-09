/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/location',
                destination: '/pages/location',
            },
            {
                source: '/locations',
                destination: '/pages/locations',
            },
            {
                source: '/who-we-are',
                destination: '/pages/who-we-are',
            } , 
            {
                source: '/services',
                destination: '/pages/services',
            }

        ];
    },
};

export default nextConfig;

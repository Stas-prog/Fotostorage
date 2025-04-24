/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        API_URL: process.env.API_URL,
        UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
        UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
        UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID

    },
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            }
        ]
    }
};

export default nextConfig;

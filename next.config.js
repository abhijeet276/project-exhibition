/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
        GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    },
    images:{
        domains:["lh3.googleusercontent.com"]
    }
}

module.exports = nextConfig

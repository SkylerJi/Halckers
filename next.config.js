//claude told me to use this for darwin compatibility issues

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    // Disable SWC for arm64 mac (M1/M2) in development
    ...(process.env.NODE_ENV === 'development' && process.platform === 'darwin' && process.arch === 'arm64'
      ? { swcMinify: false }
      : {}),
  }
  
  module.exports = nextConfig
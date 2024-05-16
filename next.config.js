/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  images: {
    domains: [
      'imgix.cosmicjs.com',
      'flexiwind.vercel.app',
      'scontent.ftgu3-3.fna.fbcdn.net'
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

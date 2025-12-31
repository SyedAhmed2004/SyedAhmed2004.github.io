/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is crucial for GitHub Pages if not using a custom domain,
  // but since you HAVE a custom domain (syedahmed.me), leave basePath empty.
};

export default nextConfig;
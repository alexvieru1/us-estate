import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "img.freepik.com",
      "i.roamcdn.net",
    ], // Add the external hostname here
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입 에러가 있어도 무시하고 성공시킵니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 코드 스타일 에러가 있어도 무시하고 성공시킵니다.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

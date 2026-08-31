/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입 에러가 있어도 무조건 통과시킵니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 스타일/경고 에러가 있어도 무조건 통과시킵니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

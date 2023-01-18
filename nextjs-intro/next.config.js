/** @type {import('next').NextConfig} */

const API_KEY = "a8d2ac4c0b5bd6b91aa3d491577ad464";

const nextConfig = {
  // reactStrictMode: true, react가 side effects를 찾아내기 위해 의도적으로 hook을 이중 호출할 수 있다. 
  async redirects() {
    return [
      {
        source: "/old-blog/:path",
        destination: "/nex-sexy-blog/:path",
        permanent: false
      }
    ]
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //     },
  //   ];
  // },
}

module.exports = nextConfig

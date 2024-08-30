/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
      );
      return config;
    },
  };
  
  export default nextConfig;
  

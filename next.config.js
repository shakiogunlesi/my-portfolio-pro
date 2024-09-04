/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Filter out CSS minification plugin
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
      );
  
      // Optionally: Disable other CSS optimizations
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'OptimizeCssAssetsWebpackPlugin'
      );
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  
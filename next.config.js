module.exports = {
  images: {
    domains: ['images.unsplash.com', 'os.alipayobjects.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.module.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: ['./public/styles/variables.scss'],
      },
    });
    return config;
  },
};

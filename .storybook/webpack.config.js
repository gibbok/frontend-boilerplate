module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};

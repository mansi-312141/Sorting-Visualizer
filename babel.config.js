module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ],
  };
  
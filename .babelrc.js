const envIsProd = String(process.env.NODE_ENV) === 'production';
const envIsTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: envIsTest ? 'commonjs' : false }],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-emotion',
      {
        hoist: envIsProd,
        sourceMap: !envIsProd,
        autoLabel: !envIsProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
};

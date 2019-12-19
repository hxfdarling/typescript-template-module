module.exports = {
  presets: [['@a8k/babel-preset', { target: 'web' }]],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // `style: true` 会加载 less 文件
      },
    ],
  ],
};

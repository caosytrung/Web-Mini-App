const {
  override,
  fixBabelImports,
  addWebpackModuleRule,
  addLessLoader,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          // Provide path to the file with resources
          resources: './src/styles/variables.scss',
        },
      },
    ],
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#eb1f3a',
      '@link-color': '#047fff',
      '@success-color': '#53c305',
      '@warning-color': '#f78212',
      '@error-color': '#ed1b23',
      '@font-family': "'Roboto', sans-serif",
      '@layout-body-background': '#ffffff',
      '@text-color': '#333333',
      '@border-radius-base': '4px',
      '@border-color-base': '#e0e0e0',
      '@input-placeholder-color': '#b4b4b4',
    },
  })
);

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#f2f2f2",
              "@text-color": "#413f40",
              "@text-color-secondary": "#ffffff",
              '@box-shadow-base': '0 2px 8px 0 rgba(99, 99, 99, 0.2)',
              'border-color-base': '#E8E8E8',
              '@heading-color': "rgba(0,0,0,0.85)",
              '@success-color': '#97D710',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

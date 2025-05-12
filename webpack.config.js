const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@lumo/core': path.resolve(__dirname, 'libs/core/src'),
      '@lumo/data': path.resolve(__dirname, 'libs/data/src'),
      '@lumo/domain': path.resolve(__dirname, 'libs/domain/src'),
      '@lumo/infrastructure': path.resolve(__dirname, 'libs/infrastructure/src'),
    },
    extensions: ['.ts', '.js', '.json'],
  },
};

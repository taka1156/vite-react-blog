const { join } = require('path');
const BASE_DIR = join(__dirname, 'src');
const TSX_FILE = join('**', '*.tsx');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [join(BASE_DIR, TSX_FILE), join(__dirname, '*.html')],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

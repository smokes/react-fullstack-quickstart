const path = require('path');

const TEST_PATH = path.resolve(__dirname, './tests/setup.js');
const MOCK_PATH = path.resolve(__dirname, './tests/fileMock.js');
const STYLE_MOCK_PATH = path.resolve(__dirname, './tests/styleMock.js');

module.exports = {
  setupFiles: [TEST_PATH],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': MOCK_PATH,
    '\\.(css|less|scss)$': STYLE_MOCK_PATH,
  },
};

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    "react-native/react-native": true
  },
  'extends': [
    'standard',
    "plugin:flowtype/recommended"
],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      "legacyDecorators": true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    "react-native",
    "flowtype"
  ],
  'rules': {
  }
}

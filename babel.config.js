const isDevelopment = process.env.NODE_ENV === 'development';

// todo eslint format
module.exports ={
  "presets": ["@babel/preset-env", [ "@babel/preset-react",{
  "runtime": "automatic"
}]],
  "plugins": [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
}
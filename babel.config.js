const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
  "@babel/preset-react",
];

module.exports = { presets };
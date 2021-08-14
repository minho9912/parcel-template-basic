module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    ["@babel/plugin-transform-runtime"],
    //위 플러그인을 통해 async,await를 사용할수있음
  ],
};
// 앞으로 작성하는 js는 babel을 통해서
// es5문법으로 변경되어 브라우저에서 동작됨.

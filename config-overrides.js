const {
  override ,
  useBabelRc
} = require("customize-cra");

// file cấu hình bổ sung webpack để tùy chỉnh webpack theo ý mình  - goi là override
// Tai day ta khai báo nap babelrc vào - Babelrc để bổ sung thêm viết tắt địa chỉ file khi import

module.exports = override(
  // enable legacy decorators babel plugin

  // nhấn thêm config babelrc vào
  useBabelRc()
);
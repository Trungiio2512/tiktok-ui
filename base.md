1. custumize-cra
   (+)npm i ustomize-cra react-app-rewired -D
   (+)create file config-overrides.js at the same level as package.json

   (+)in file config-overrides.js
   module.exports = function override (config,env) {
   return config
   }
   (+) in file package.json change scripts =>

   "scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
   "eject": "react-app-rewired eject"
   },

2. install babel-plugin-module-resolve => import file trong src đơn giản ngắn gọn hơn
   (+) tạo file .babelrc cùng cấp vơi package.json
   (+) trong file .babelrc thêm
   {
   "plugins": [
   ["module-resolver", {
   "alias": {
   "~": "./src"
   }
   }]
   ]
   }
   (+) tạo file jsconfig.json
   (+) trong file thêm
   {
   "compilerOptions": {
   "baseUrl": ".",
   "paths": {
   "~/_": ["src/_"]
   }
   }
   }
   (+) thay đổi trong file config-overrides.js
   const {override, useBabelRc} = require("customize-cra");

   module.exports = override(
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useBabelRc()
   );

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  
    plugins: [
   [
         'module-resolver',
         {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
             tests: ['./tests/'],
             "components": "./src/components",
             "theme":"./src/theme",
             "assets":"./src/assets",
             "constants":"./src/constants"
           }
        }
      ]
    ]
  
};

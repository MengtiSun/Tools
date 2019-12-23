const path = require('path');

// path.resolve('aaa/bbb', '../ccc', './xxx/yyy', '../a.txt');
// __dirname: current path
console.log(path.resolve(__dirname, 'dest'));
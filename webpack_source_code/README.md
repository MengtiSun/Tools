# Using webpack to bundle index.js
webpack index.js --mode=development
<br/>
Go to dist/main.js, you will notice the code is in this format:
```javascript
(function(modules) {
  // ...
})({
 // ...
})
```
The function argument is the modules object:
```
{
  "./src/index.js": (function (module, __webpack_exports__, __webpack_require__) {
    // ...
  }),
  "./src/message.js": (function (module, __webpack_exports__, __webpack_require__) {
    // ...
  }),
  "./src/test.js": (function (module, __webpack_exports__, __webpack_require__) {
    // ...
  })
}
```
The key is the files we wrote, and the value is their corresponding codes in ES5
<br/>
...

# What does a module bundler do?
1. Transform ES5 to ES6
2. Handle modules dependency
3. Generate a JS files that can be run in browser

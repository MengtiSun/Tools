# What does Webpack do?
* Compress
* Packaging
* Compile of files (Less, Sass...)
* Scaffold
* Generating...


# Set up Webpack
## Install Webpack
npm i webpack-cli -g
## Webpack file
webpack.config.js<br/>
This is the 'default'. But you can change it if you really want to.
## Run Webpack
webpack


# Webpack file
## mode: how it is optimized
* **none**: no optimization<br/>
* **development**: output console info, set up process.env.NODE_ENV<br/>
* **production**: highest optimization: compress, ignore...
## entry
single entry ---- SPA<br/>
multi entries ---- MPA
## output
must be a json
```
{
  path: must be absolute path: path.resolve()
  filename: filename
}
```

# Loaders
Deal with data besides JS and JSON
## css-loader && style-loader
loaders have order, they are executed from back to front<br/>
`use: ['style-loader', 'css-loader']`: first css-loader, then style-loader<br/>
* **css-loader**: read and parse css (no compile errors) and put into bundle<br/>
* **style-loader**: get the result of css-loader, put result into <style> tag

## postcss-loader && autoprofixer
* **postcss-loader**: add browser prefix 
* **autoprofixer**: tell postcss-loaders which to add/not add (>= 5%)
`npx autoprefixer --info`: Show target browsers and used prefixes<br/>
"browerselist" in package.json

## file-loader && url-loader
* **file-loader**: options -> outputPath & publicPath
* **url-loader**: images smaller than limit will be stored as base64 in css directly
Usually use url-loader for some small things like: small icons....<br/>
url-loader cannot be used without file-loader, as it uses file-loader when greater than limit
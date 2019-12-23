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
webpack.config.js
This is the 'default'. But you can change it if you really want to.
## Run Webpack
webpack


# Webpack file
## mode: how it is optimized
none: no optimization
development: output console info, set up process.env.NODE_ENV
production: highest optimization: compress, ignore...
## entry
single entry ---- SPA
multi entries ---- MPA
## output
must be a json
{
  path: must be absolute path: path.resolve()
  filename: filename
}
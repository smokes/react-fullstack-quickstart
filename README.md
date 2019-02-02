# react-fullstack-quickstart

[![Build Status](https://travis-ci.org/smokes/react-fullstack-quickstart.svg?branch=master)](https://travis-ci.org/smokes/react-fullstack-quickstart)
[![GitHub issues](https://img.shields.io/github/issues/smokes/react-fullstack-quickstart.svg)](https://GitHub.com/smokes/react-fullstack-quickstart/issues/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1eabe23c00984adfabf4df424c3770ea)](https://www.codacy.com/app/smokes/react-fullstack-quickstart?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smokes/react-fullstack-quickstart&amp;utm_campaign=Badge_Grade)

I figured out i could learn how to setup my own fullstack boilerplate with React, Webpack and Express.

## Quick Setup
```bash
# Clones the repository
$ git clone git@github.com:smokes/react-fullstack-quickstart.git 
# Changes directory
$ cd react-fullstack-quickstart
# Installs all dependencies
$ npm install
# Bundles react code and injects it into the template html file
$ npm run build
```
## Features 

### Latest ECMAScript features 
It uses @babel/preset-env and @babel/preset-react for transpiling code
### Express.js backend
Uses Express.js for server-side with hot reloading thanks to nodemon
### Code linting + formatting on save
Thanks to Eslint and Prettier code formatting is much easier and is done automatically on file save
### Unit testing with jest and enzyme
Jest is already configured to work with enzyme so you could easily test your React Components
### Sass support
Done through node-sass with Webpack's sass-loader

## NPM Scripts
```bash
# Builds your React application and runs an express instance to serve them with the api
$ npm start
# Builds your React application into the /builds directory without the express server
$ npm run build
# Runs the the express.js server with nodemon
$ npm run server
# Spawns a webpack-dev-server for realtime jsx editing with hot reload
$ npm run client
# Runs a webpack-dev-server on port 3000 with an express api proxified from port 8080
$ npm run fullstack
# Runs unit tests with jest
$ npm run test
# Runs unit tests with jest and watches for file changes
$ npm run test-watch
```
## LICENSE 

Published under the MIT LICENSE, for more info check 
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/smokes/react-fullstack-quickstart/master/LICENSE)






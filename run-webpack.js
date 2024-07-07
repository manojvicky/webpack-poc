
const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config).watch({},()=>{
    console.log("build successfully");
})
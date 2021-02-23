var path = require('path')

module.exports = {
    entry: {
        App: './src/js/App.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "script.js"
    }
};
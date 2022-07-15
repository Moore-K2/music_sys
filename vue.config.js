const path = require("path")

function resolve(dir) {
    // __dirname：绝对路径
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: process.env.NODE_ENV === "development",
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            }
        }
    }
}
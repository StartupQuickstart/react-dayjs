"use strict";

const path = require("path");

module.exports = {
    // Entry point for the application
    entry: "./src/index.jsx",

    // Output configuration
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "react-dayjs",
        libraryTarget: "umd", // Universal Module Definition
        clean: true // Cleans 'dist' folder before output (Webpack 5 feature)
    },

    // Externals: Do not bundle external libraries
    externals: {
        react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        },
        dayjs: {
            root: "dayjs",
            commonjs: "dayjs",
            commonjs2: "dayjs",
            amd: "dayjs"
        },
        "prop-types": {
            root: "PropTypes",
            commonjs: "prop-types",
            commonjs2: "prop-types",
            amd: "prop-types"
        }
    },

    // Module rules
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .js and .jsx files
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", // Transpile modern JS syntax
                            "@babel/preset-react" // Transpile JSX
                        ]
                    }
                }
            }
        ]
    },

    // Resolve extensions for imports
    resolve: {
        extensions: [".js", ".jsx"]
    },

    // Mode: Allow CLI or env flag to determine
    mode: process.env.NODE_ENV || "production",

    // Optimization: Enable Webpack 5 defaults
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all" // Code splitting for all types of chunks
        }
    },

    // Development tools
    devtool: "source-map", // Enable source maps for debugging
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 8080,
        open: true
    }
};
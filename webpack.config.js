
const path = require('path');
const fs = require('fs');

const entriesObject = {};
entriesObject['application.js'] = path.resolve(__dirname, 'src/scripts/application.js');
fs.readdirSync('./src/scripts/sections', { withFileTypes: true }).forEach(file => {
    entriesObject[file.name] = path.resolve(__dirname, `src/scripts/sections/${file.name}`);
});

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: entriesObject,
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
};

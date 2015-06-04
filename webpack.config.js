/**
 * Created by david on 5/29/15.
 */

module.exports = {
    context:  __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|dist|bower_components/,
                include: [__dirname + '/node_modules/angular2']
            }, {
                test: /\.ts$/,
                loader: 'typescript'
            }, {
                test: /\.html$/,
                loader: 'raw'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }
        ]
    }
};



const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },

    // dev Server updates CSS & JS files in browser without full reload    
    devServer: {
    
        //The following code is supposed to relaod the browser after html changes.
        //However, it does not.  (Online search: Webpack v5 dropped 'before')
             
            //before: function(app, server) {server._watch('./app/**/*.html')},

        static: path.join(__dirname, 'app'),  // 'static' replaces 'contentBase' from lesson 6.20
        hot: true,
        port: 3000

        //the following line of code allows devices on same network to communicate
        //host: '0,0,0,0'

        //To get dev website in another device using the same WiFi network, 
        //use local IP address (noted in "System Preferences/Network").
        //The local IP address should begin with 192.168.
        //type 192.168.x.x:3000 into device browser to generate website.
        //Replace .x.x in 192.168.x.x with remainder of local IP address.
        //see Section 6.20 @ time=12:30
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]   // JavaScript loads css files
            }
        ]
    }
}

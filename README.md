https://github.com/GrandStar/SE_Project

### Stack

- [facebook/react](https://github.com/facebook/react) - View
- [reactjs/redux](https://github.com/reactjs/redux) - App State
- [gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader) - Hot Reloading of React Components
- [webpack/webpack](https://github.com/webpack/webpack) - Builds & Dev-Server

### Installation

```bash
$ git clone
$ cd SE_Project
```

You'll need to have MongoDB running.

### Run

```bash
$ npm start # starts app in dev mode
$ npm run prod # starts server in production mode
$ npm run build # builds source files in .build/
$ node .build/server.bundle.js # starts server (after you built with npm run build)
```

This will start a server listening on port `3000`.
_You can change the port in_ `config/page.js` _or by setting the `PORT` environment variable_.

### FAQ

#### How to add vendor scripts and css?

If you want to add any vendor javascript or css, you'll likely not want it to be processed by
babel or localized by css loader.

Add these scripts to the static/vendor folder and they will use a different loader configuration.

### Contributing

Pull Requests are very welcome!

If you find any issues, please report them via [Github Issues](https://github.com/GrandStar/SE_Project/issues)!

### License

(MIT)

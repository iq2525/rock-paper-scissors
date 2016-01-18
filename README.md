# [Rock, Paper, Scissors](https://github.com/iq2525/rock-paper-scissors)

An app that allows you to play Rock, Paper, Scissors against the computer.

[Redux](https://github.com/rackt/redux) manages the state in the app.

[Bourbon](http://bourbon.io/) & [Neat](http://neat.bourbon.io/) - Used provide to grid work and make responsive page.  

## Software Requirements

[Node.js](https://nodejs.org) >= v4.0 - Required to build the app.  You must have at least v4.0 to run the tests.

## Installation

1. Install NPM Packages:

```
npm install
```

2. *IMPORTANT* - You need [Node.js](https://nodejs.org) >= 4.0 to run the tests.  As they use 'jsdom' which needs some ES6 features:

```
npm test
```

3. Build code and run server:

```
npm start
```

4. Go to the following URL in your browser:

[https://localhost:3000](https://localhost:3000)

## Main libraries used

* [React.js](https://facebook.github.io/react/) - Used to create view layer using React components.
* [Redux](https://github.com/rackt/redux) - A predictable state container for JavaScript apps.
* [Babel](https://babeljs.io/) - Transforms ES6 syntax so it can be used on older browsers and compiles React JSX into JavaScript.
* [Webpack](https://webpack.github.io/) - Module bundler and build tool.
* [SASS](http://sass-lang.com/) - CSS Preprocessor.
* [Bourbon](http://bourbon.io/) & [Neat](http://neat.bourbon.io/) - Used provide to grid work and make responsive page.  
* [Mocha](https://mochajs.org/) & [Expect](https://github.com/mjackson/expect/) - Unit testing framework & assertion library.
* [React Test Utils](https://facebook.github.io/react/docs/test-utils.html) - Allows test rendering of React components.

## Software Overview

Flow of data & updates is managed by [Redux](https://github.com/rackt/redux).  The structure is as follows:

[Action] -> [Reducer] -> [React Container Component] -> [React Display Component]

## License

MIT

# react-native-base
Everything you need when starting a new react native project.

### What is it?
...


### Why use it?
...


### What's in the box?

  - RN's Navigator
  - Style Variables (for branding)
  - Constants Variables (for endpoints, external urls etc.)
  - A couple basic routes to get you started

### Libraries

  - Immutable JS [+](https://facebook.github.io/immutable-js/)
  - Jest React Native [+](https://facebook.github.io/jest/docs/tutorial-react-native.html)
  - Redux [+](http://redux.js.org/)
  - Redux Logger [+](https://github.com/evgenyrodionov/redux-logger)
  - React Native Vector Icons [+](https://github.com/oblador/react-native-vector-icons)

### Quick Start
First you will have to install the `dependecies` & the `devDependencies`.

    # dependencies
    npm install --save immutable react-redux react-native-vector-icons redux 

    # devDependencies
    npm install --save-dev babel-jest babel-preset-react-native enzyme jest-react-native redux-logger
    
Then copy the files from the list below into your project.
 
    .babelrc
    App/
    
  Finally include the jest basic configuration to your `package.json`.
  
    "jest": {
      "preset": "jest-react-native"
    },
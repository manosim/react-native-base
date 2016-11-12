# react-native-base
Everything you need when starting a new react native project.


### What's in the box?

  - RN's Navigator
  - Tests
  - Style Variables (for branding)
  - Constants Variables (for endpoints, external urls etc.)
  - A couple basic routes to get you started


### Libraries

  - Immutable JS [+](https://facebook.github.io/immutable-js/)
  - Jest [+](https://facebook.github.io/jest/docs/tutorial-react-native.html)
  - Redux [+](http://redux.js.org/)
  - Redux Logger [+](https://github.com/evgenyrodionov/redux-logger)
  - React Native Vector Icons [+](https://github.com/oblador/react-native-vector-icons)


### What is it?

React Native is amazing. Starting a new project `react-native init MyProject` also creates the iOS & Android projects which makes it harder(*maybe* impossible too?) to create a project template. The main idea is that you create your react-native project as usual and then you just copy this project's files (`./App` etc.), install the libraries and prepare your project for developement in no time.


### Why use it?

Every time I am setting up a react-native project I have to follow pretty much the same procedure. Instead of having to copy & paste and edit files from previous projects, I made this project which aims to be a generic "template". If you are going to use react-native's [Navigator](https://facebook.github.io/react-native/docs/navigator.html), redux and most of the libraries listed above, then `react-native-base` will save you lots of time.


### Should I use it?

If you are familiar enough with React Native - YES. If you are not, it is still fine but note that this is **not** a boilerplate. You will also need some basic [redux](http://redux.js.org/) knowledge. If you don't plan to use redux, then all that's left is the implementation of the Navigator with the tests.


### How to use it? Quick Start!

Create your project as usual.

    react-native init MyProject

Then you will have to install the `dependecies` & the `devDependencies`.

    # dependencies
    npm install --save immutable react-redux react-native-vector-icons redux 

    # devDependencies
    npm install --save-dev babel-jest babel-preset-react-native enzyme jest-react-native redux-logger
    
Then copy the files from the list below into your project.
 
    .babelrc
    App/
    
Include the jest basic configuration to your `package.json`.
  
    "jest": {
      "preset": "jest-react-native"
    },

Finally run the link command to link `react-native-vector-icons`.

    react-native link
    
That's all folks!


### Coming Soon

  - [ ] Create a shell script for easier installation
  - [ ] Improve coverage of `./App/`


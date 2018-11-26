react-native-base [![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]
===
Everything you need when starting a new react native project!


### Table of contents

  - [What's in the box](#whats-in-the-box)
  - [Libraries](#libraries)
  - [Installation - Quick Start](#installation---quick-start)
  - [Installation - Manually](#installation---manually)
  - [What is it?](#what-is-it)
  - [Why use it?](#why-use-it)
  - [Should I use it?](#should-i-use-it)


### What's in the box?

  - React Navigation
  - Tests (using Jest & Enzyme) - Coverage **100%**
  - Style Variables (for branding)
  - Constant Variables (for endpoints, external urls etc.)
  - A couple basic routes to get you started


### Libraries

  - Redux [+](http://redux.js.org/)
  - React DOM [+](https://www.npmjs.com/package/react-dom)
  - Redux Logger [+](https://github.com/evgenyrodionov/redux-logger)
  - React Native Vector Icons [+](https://github.com/oblador/react-native-vector-icons)
  - Enzyme [+](http://airbnb.io/enzyme/)


### Installation - Quick Start
Make sure you have a fresh react-native project or initialize one and then `cd` into the project.

    react-native init MyProject
    cd MyProject/

To install `react-native-base` it is suggested that you use the installation script:

    curl -o- -L https://raw.githubusercontent.com/manosim/react-native-base/master/scripts/install.sh | bash


### Installation - Manually

Create your project as usual.

    react-native init MyProject
    cd MyProject/

Then you will have to install the `dependencies` & the `devDependencies`.

    # dependencies
    npm install --save react-redux react-native-vector-icons redux 

    # devDependencies
    npm install --save-dev enzyme react-dom react-addons-test-utils redux-logger
    
Then copy the files/directories from the list below into your project.
 
    app/
    index.js

Edit index.js and replace `PROJECT_NAME` with your app's name.

```diff
-AppRegistry.registerComponent('PROJECT_NAME', () => AppContainer);
+AppRegistry.registerComponent('MyProject', () => AppContainer);
```
    
Finally run the link command to link `react-native-vector-icons`.

    react-native link
    
That's all folks!


### What is it?

React Native is amazing. Starting a new project `react-native init MyProject` also creates the iOS & Android projects which makes it harder (*maybe* impossible too?) to create a project template. The main idea is that you create your react-native project as usual and then you just copy this project's files (`./app` etc.), install the libraries and prepare your project for developement in no time.


### Why use it?

Every time I am setting up a react-native project I have to follow pretty much the same procedure. Instead of having to copy & paste and edit files from previous projects, I made this project which aims to be a generic "template". If you are going to use [react-navigation](https://reactnavigation.org), redux and most of the libraries listed above, then `react-native-base` will save you lots of time.


### Should I use it?

If you are familiar enough with React Native - YES. If you are not, it is still fine but note that this is **not** a boilerplate. You will also need some basic [redux](http://redux.js.org/) knowledge. If you don't plan to use redux, then all that's left is the implementation of the react-navigation with the tests.


[travis-image]: https://travis-ci.org/manosim/react-native-base.svg?branch=master
[travis-url]: https://travis-ci.org/manosim/react-native-base
[codecov-image]: https://codecov.io/gh/manosim/react-native-base/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/manosim/react-native-base

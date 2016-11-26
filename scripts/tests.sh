#!/bin/bash
set -e

DEPENDENCIES="react-redux react-native-vector-icons redux"
DEV_DEPENDENCIES="enzyme react-dom react-addons-test-utils redux-logger"

create_rn_project() {
    printf "> Creating React Native Project.\n\n"
    react-native init DemoApp
    cd DemoApp/
}

copy_files() {
    printf "> Copying files.\n"
    cp -r ../App .
    rm -rf __tests__/
}

install_dependencies() {
    printf "> Installing dependencies & devDependencies.\n\n"

    # dependencies
    npm install --loglevel=warn --save $DEPENDENCIES

    # devDependencies
    npm install --loglevel=warn --save-dev $DEV_DEPENDENCIES
}

rename_project_name() {
    printf "> Renaming the project name in the entrypoints.\n"
    sed -i '' -e "s/PROJECT_NAME/DemoApp/g" "index.ios.js"
    sed -i '' -e "s/PROJECT_NAME/DemoApp/g" "index.android.js"
}

install() {
    printf "\n> Setting Up Tests for react-native-base.\n"
    create_rn_project
    copy_files
    install_dependencies
    rename_project_name
}

install

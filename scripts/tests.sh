#!/bin/bash
set -e

reset="\e[0m"
red="\e[0;31m"
green="\e[0;32m"
yellow="\e[0;33m"
cyan="\e[0;36m"
white="\e[0;37m"

DEPENDENCIES="react-redux react-native-vector-icons redux"
DEV_DEPENDENCIES="enzyme react-dom react-addons-test-utils redux-logger"

create_rn_project() {
    printf "$cyan> Creating React Native Project.$reset\n\n"
    react-native init DemoApp
    cd DemoApp/
}

copy_files() {
    printf "$cyan> Copying files.$reset\n"
    cp -r ../App .
    rm -rf __tests__/
}

install_dependencies() {
    printf "$cyan> Installing dependencies & devDependencies.$reset\n\n"

    # dependencies
    npm install --loglevel=warn --save $DEPENDENCIES

    # devDependencies
    npm install --loglevel=warn --save-dev $DEV_DEPENDENCIES
}

rename_project_name() {
    printf "$cyan> Renaming the project name in the entrypoints.$reset\n"
    sed -i '' -e "s/PROJECT_NAME/DemoApp/g" "./index.ios.js"
    sed -i '' -e "s/PROJECT_NAME/DemoApp/g" "./index.android.js"
}

install() {
    printf "\n$cyan> Setting Up Tests for react-native-base.$reset\n"
    create_rn_project
    copy_files
    install_dependencies
    rename_project_name
}

install

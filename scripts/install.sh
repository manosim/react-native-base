#!/bin/bash
set -e

reset="\e[0m"
red="\e[0;31m"
green="\e[0;32m"
yellow="\e[0;33m"
cyan="\e[0;36m"
white="\e[0;37m"

APP_NAME=$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[ ",]//g')
BRANCH_NAME="setup-app"
DEPENDENCIES="immutable react-redux react-native-vector-icons redux"
DEV_DEPENDENCIES="babel-jest babel-preset-react-native enzyme jest-react-native redux-logger"
ZIP_FILENAME="react-native-base.zip"
ZIP_DESTINATION="react-native-base-$BRANCH_NAME"
APP_DESTINATION="App"

info() {
    printf "\n"
    printf "$cyan  React Native Base$reset\n"
    printf "$cyan  =================$reset\n"
    printf "$cyan  https://www.github.com/manosim/react-native-base$reset\n\n"

    printf "$yellow> Is this a fresh project? If not we suggest commiting any pending changes first.$reset\n"
    printf "$yellow> React Native Base will overwrite the project's index.ios.js & index.android.js.$reset\n"
    printf "$yellow> If you are not sure, please visit the GitHub repository.$reset\n\n"
}

are_you_sure() {
    printf "$cyan> Are you sure you want to continue? "
    read -n 1 -r
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
        [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1
    else
        printf "\n"
    fi
}

download_zip() {
    printf "$cyan> Downloading zip.$reset\n"
    curl -s "https://codeload.github.com/manosim/react-native-base/zip/$BRANCH_NAME" --output $ZIP_FILENAME
}

unzip_app() {
    printf "$cyan> Unzipping.$reset\n"
    unzip -qo $ZIP_FILENAME
}

copy_files() {
    printf "$cyan> Copying files.$reset\n"
    mkdir -p $APP_DESTINATION
    cp "$ZIP_DESTINATION/.babelrc" .
    cp -r "$ZIP_DESTINATION/$APP_DESTINATION/" $APP_DESTINATION
}

install_dependencies() {
    printf "$cyan> Installing dependencies & devDependencies.$reset\n"

    # dependencies
    npm install --loglevel=warn --save $DEPENDENCIES

    # devDependencies
    npm install --loglevel=warn --save-dev $DEV_DEPENDENCIES
}

clean_up() {
    printf "$cyan> Cleaning Up.$reset\n"
    rm -f $ZIP_FILENAME
    rm -rf $ZIP_DESTINATION
}

install() {
    info
    are_you_sure

    printf "\n$cyan> Installing react-native-base on $(tput bold)$APP_NAME$(tput sgr0).$reset\n"
    install_dependencies
    download_zip
    unzip_app
    copy_files
    clean_up
}

install

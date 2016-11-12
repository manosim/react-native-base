#!/bin/bash
set -e

reset="\e[0m"
red="\e[0;31m"
green="\e[0;32m"
cyan="\e[0;36m"
white="\e[0;37m"

ZIP_FILENAME="react-native-base.zip"
ZIP_DESTINATION="react-native-base-setup-app/"

download_zip() {
    printf "$green> Downloading zip.$reset\n"
    curl -s "https://codeload.github.com/manosim/react-native-base/zip/setup-app" --output $ZIP_FILENAME
}

unzip_app() {
    printf "$green> Unzipping.$reset\n"
    unzip -o -q $ZIP_FILENAME
}

copy_files() {
    printf "$green> Copying files.$reset\n"

}

clean_up() {
    printf "$green> Cleaning Up.$reset\n"
    rm -f $ZIP_FILENAME
    rm -rf $ZIP_DESTINATION

}

install() {
    printf "$green> Installing react-native-base.$reset\n"
    download_zip
    unzip_app
    copy_files
    clean_up
}


printf "$green> Setting Up react-native-base.$reset\n"
install

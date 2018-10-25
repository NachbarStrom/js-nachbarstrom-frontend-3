#!/bin/bash

# Install Node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn node package manager
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# Setup the projects dependencies and build the project
yarn
yarn run build
yarn global add serve
echo "export PATH=$(yarn global bin):\$PATH" >> ~/.bashrc
source ~/.bashrc

#!/usr/bin/env bash
git pull
yarn build
sudo killall node
nohup sudo $(which serve) -s build --listen 80 >>logs 2>>logs &
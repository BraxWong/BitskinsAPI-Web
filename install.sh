#!/bin/bash
#Check if Node is install
if which node > /dev/null
  then
    echo "Installing Express"
    sudo npm install express
    echo "Install fs"
    npm install fs
    echo "Install kill-port"
    npm install --save kill-port
    echo "Install mongodb"
    npm isntall mongodb
  else
    echo "Error: Node has not been installed."
  fi

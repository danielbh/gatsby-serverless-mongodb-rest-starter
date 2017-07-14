#!/usr/bin/env bash

if [ $# -eq 0 ]
  then
    echo "ERROR!"
    echo "Please supply a name for your new component as an argument."
    exit 1
fi

mkdir ui/src/components/$1
touch ui/src/components/$1/index.js
touch ui/src/components/$1/style.css
touch ui/src/components/$1/index.test.js



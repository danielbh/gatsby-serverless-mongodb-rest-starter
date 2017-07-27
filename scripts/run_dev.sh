#!/usr/bin/env bash

if [ "$(docker ps -q -f name=mongo)" ]; then
    docker rm mongo -f
fi

# npm package for concurrently running many services at once
concurrently "npm run mongo:start" "npm run api" "npm run ui"



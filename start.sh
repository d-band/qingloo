#! /bin/bash

DEBUG=* NODE_ENV=prod pm2 start --watch app.js --node-args="--harmony" --name "qingloo"
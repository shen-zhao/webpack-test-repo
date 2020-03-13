#!/bin/bash

unset npm_config_prefix

node -v

# build start
buildStart=`date +%s`

npm run build:start

# build finally
buildEnd=`date +%s`
echo "Time: "`expr $buildEnd - $buildStart`"s"
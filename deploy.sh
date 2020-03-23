#!/bin/bash

# 检查系统有没有安装yarn
which yarn >/dev/null 2>&1
if [ $? -ne 0 ]; then
  echo '没有找到yarn命令，请参照 https://yarnpkg.com/en/docs/install 安装yarn'
fi

if [ "$1" = 'prod' ]
then
    rm -rf ./dist/prop
    yarn run build-prod
    # ... 同步dist/prod 目录
else
    rm -rf ./dist/test
    yarn run build-test
fi

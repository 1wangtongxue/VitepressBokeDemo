#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ../docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

#git@github.com:1wangtongxue/VBD.git修改成自己的仓库名称
# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:1wangtongxue/VitepressBokeDemo.git master:master

cd -
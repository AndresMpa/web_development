#!/usr/bin/env sh

# abort on error
set -e

npm run build

cd dist

git init
git add --all
git commit -m 'deploy'
git push git@github.com:AndresMpa/web_development.git parking-system
cd -

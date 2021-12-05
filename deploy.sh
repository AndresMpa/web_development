#!/usr/bin/env sh

# abort on error
set -e

npm run build

cd dist

git init
git add --all
git commit -m 'deploy'
git push -f origin parking-system:parking-system
cd -

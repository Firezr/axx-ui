rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Firezr/AxxUI.git &&
git push -f -u origin master &&
cd -
echo https://firezr.github.io/AxxUI/


# git init
# git add README.md
# git commit -m "first commit"
# git branch -M main
# git remote add origin git@github.com:Firezr/AxxUI.git
# git push -u origin main
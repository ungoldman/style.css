# replacement for https://github.com/sudodoki/exit-on-dirty-git
if [[ -n $(git status -s) ]]; then
  echo "git is dirty" && exit 1
else
  echo "git is clean" && exit 0
fi

# list remote branch
git remote -v

# push to different remote branch
git push origin local_branch:remote_branch

# remove invalid remote branches
git remote prune origin

# remove tag
git push origin :v15

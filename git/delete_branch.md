# Delete all merged  branches
git branch -d $( git branch --merged | grep -v '^\*' | grep -v 'master' )

# Delete non-merged branch
git branch -d branchname

# delete remote branch
git push origin --delete branchname

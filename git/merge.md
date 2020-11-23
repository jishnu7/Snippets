# delete all deleted by us files, on conflict
git status ./ | sed -n '/deleted by us: /s///p' | xargs git rm

git status ./ | grep deleted | awk '{print $4}' | xargs git rm 


$ git log --oneline
	c172641 Fix second file
	24f5ad2 Another file
	97c9d7d Add first file
$ git rebase -i 97c9d7d
	pick 24f5ad2 Another file
	squash c172641 Fix second file
$ git log --oneline
	1a9d5e4 Another file
	97c9d7d Add first file

# Undo/Edit last commit

$ git reset --soft HEAD^      
$ edit    
$ git add ....
$ git commit -c ORIG_HEAD 

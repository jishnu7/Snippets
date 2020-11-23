# show files 
-n

# replace
rename s/"SEARCH"/"REPLACE"/g *

# prefix
rename s/'^'/'MyPrefix'/ *

# suffix
rename s/'$'/'MySuffix'/ *

# using bash
for f in * ; do mv "$f" "pre_$f" ; done

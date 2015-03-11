
# Find files with size 0
find ./ -size  0
# Delete
find /tmp -size  0 -print0 |xargs -0 rm

# Find file
find ./ -regex ".*\(php\|html\|js\)$"

# Move all files to a different directory
find ./ -maxdepth 1 -type f -print0 | xargs -0 -I {} mv {} /new-location/

# total size of files
find ./  -ls | grep "_up" | awk '{s+=$7} END {print "Total SIZE: " s}

# delete folder
find ./ -name 'FOLDER_NAME' -exec rm -r {} \;

# find folders which doesn't have a file
find ./ -type d '!' -exec sh -c 'ls -1 "{}"|egrep -i -q "\.(mp3)$"' ';' -print

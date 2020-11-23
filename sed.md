
# replace string in multiple files: old with new
find . -name "*.js" -exec sed -i "s/old/new/g" '{}' \;

# avoid hiddent folders
find . -not -path '*/\.*' -type f -exec sed -i

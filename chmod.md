
# recursively give directories read&execute privileges:
find ./ -type d -exec chmod 755 {} +

# recursively give files read privileges: 
find ./ -type f -exec chmod 644 {} +

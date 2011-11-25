// Split "string1|string2|string3"

echo “asd|www|qwe” | awk -F “|” ‘{ print $1,$2,$3 }’

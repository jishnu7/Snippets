#!/bin/sh
# Fix png color scheme issue
for i in $(find / -type f -name "*.png")
do
    convert $i -strip $i
done

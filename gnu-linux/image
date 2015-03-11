for i in *.JPG ; do echo "$i"; convert -resize 1920x "$i" "out/${i%.*}.jpg" ; done

# height
for i in *.jpg; do echo "$i"; convert "$i" -resize 50x "$i"; done
# width
for i in *.jpg; do echo "$i"; convert "$i" -resize x50 "$i"; done

// pdf to set of images
convert -quality 100 -density 300x300 multipage.pdf single%d.jpg


// set of images to pdf
convert -density 200x200 -quality 60 -compress jpeg form-*.jpg form.pdf
convert page*.png mydoc.pdf

-compress jpeg -quality 90
-resize 1240x1753
-extent 1240x1753
// -extent actually extends the image to be 1240x1753,
// while -resize keeps the image's ratio, fitting it into either 1240x... or ...x1753.

-gravity center
// The -gravity parameter is optional but can be used to center the image when extending.

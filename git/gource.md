gource -1280x720 -s 0.1 --hide filenames --highlight-users
gource -1280x720 -s 0.1 --hide filenames --highlight-users -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libvpx -b 10000K gource.webm
gource -1280x720 -s 0.1 --hide filenames --highlight-users -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 gource_2.mp4


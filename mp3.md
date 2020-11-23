# convert to variable bitrate mp3
ffmpeg -i inputfile.m4a -c:a libmp3lame -ac 2 -q:a 2 outputfile.mp3

# constant bit rate
ffmpeg -i inputfile.m4a -c:a libmp3lame -ac 2 -b:a 190k outputfile.mp3

# Loop and convert to lower quality
for f in *.mp3; do ffmpeg -i "$f" -codec:a libmp3lame -qscale:a 5 "encoded/${f%.*}.mp3"; done

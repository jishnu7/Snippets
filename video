# cut video
# cut 5 seconds, starting from 5 minutes, 3 seconds and 123 milliseconds.
ffmpeg -i input.mp4 -ss 00:05:03.123 -t 5 -c:v libx264 -c:a libfaac out.mp4

# to gif
ffmpeg -t 5 -ss 00:00:10 -i funny.mp4 out.gif

# rotate
# For the transpose parameter you can pass:
# 0 = 90CounterCLockwise and Vertical Flip (default) 
# 1 = 90Clockwise 
# 2 = 90CounterClockwise 
# 3 = 90Clockwise and Vertical Flip
ffmpeg -i in.mov -vf "transpose=1" out.mov

# reverse video
ffmpeg -i inputfile.mp4 -vf reverse reversed.mp4


# repeat video 4 times
for i in {1..4}; do printf "file '%s'\n" org_tlp_6553634_1545520908000.mov >> list.txt; done
ffmpeg -f concat -i list.txt -c copy output.mp4

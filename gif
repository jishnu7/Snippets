# creating gif image using ffmpeg

ffmpeg -i output.mp4 -vf scale=320:-1 -r 15 frames/ffout%03d.png

convert -delay 8 -loop 0 frames/ffout*.png output.gif


# Patrol Cycles - cycle back and forth between two ends

convert script_k.gif -coalesce   -duplicate 1,-2-1 \
          -quiet -layers OptimizePlus  -loop 0 patrol_cycle.gif


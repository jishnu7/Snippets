
# query our hardware
xrandr -q

# laptop panel LVDS and an external VGA port regard as VGA
xrandr --output VGA1 --mode 1280x1024 --right-of LVDS1

# clone
--same-as


# create a new 1280x800 at 68Hz refresh and attach it to the VGA output
xrandr --newmode $(gtf 1280 800 68 | grep Modeline | sed s/Modeline\ // | tr -d '"')
xrandr --addmode VGA 1280x800_68.00

xrandr --output VGA --off
xrandr --output eDP1 --auto

# panning
xrandr --output DP1 --auto --output DP1 --auto --panning 1600x900+1600+0 --scale 2x2 --right-of eDP1

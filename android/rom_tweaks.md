# cpu scaling governor
echo "interactive" > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

# Clocking
echo 1000000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq
echo  150000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_min_freq

# touch wake
echo 1 > /sys/class/misc/touchwake/enabled
echo 10000 > /sys/class/misc/touchwake/delay

# backlight dimmer (BLD)
echo 0 > /sys/class/misc/backlightdimmer/enabled
echo 7000 > /sys/class/misc/backlightdimmer/delay

# backlight notification (BLN)
echo 1 > /sys/class/misc/backlightnotification/enabled
echo 0 > /sys/class/misc/backlightnotification/in_kernel_blink

# Battery charge limit
echo 96 > /sys/class/misc/batterylifeextender/charging_limit


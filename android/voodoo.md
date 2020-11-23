# Stick voodoo settings on reboot
# location        : /system/etc/init.d/
# file permission : 755

# Voodoo Color
echo 2724764160 > /sys/class/misc/voodoo_color/red_multiplier
echo 3059586880 > /sys/class/misc/voodoo_color/green_multiplier
echo 2944130880 > /sys/class/misc/voodoo_color/blue_multiplier

echo "-26" > /sys/class/misc/voodoo_color/red_v1_offset
echo "-30" > /sys/class/misc/voodoo_color/green_v1_offset
echo "-33" > /sys/class/misc/voodoo_color/blue_v1_offset

# Voodoo Sound

# voodoo_sounds_control
echo 1 > /sys/class/misc/voodoo_sound_control/enable		

#headphone amplifier level
# (subtract 57 from the integer below to get decibel
#  conversion; 0db = 57)
echo 60 > /sys/class/misc/voodoo_sound/headphone_amplifier_level

# anti-jitter
echo 1 > /sys/class/misc/voodoo_sound/fll_tuning

# hi-fi play
echo 1 > /sys/class/misc/voodoo_sound/dac_osr128

# hi-fi record
echo 1 > /sys/class/misc/voodoo_sound/adc_osr128

# dac direct
echo 1 > /sys/class/misc/voodoo_sound/dac_direct

# mono downmix
echo 0 > /sys/class/misc/voodoo_sound/mono_downmix


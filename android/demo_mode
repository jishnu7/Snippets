#
# Enter
adb shell am broadcast -a com.android.systemui.demo -e command enter

# Exit
adb shell am broadcast -a com.android.systemui.demo -e command exit

# Set clock
adb shell am broadcast -a com.android.systemui.demo -e command clock -e hhmm 1234

# Set WiFi to max
adb shell am broadcast -a com.android.systemui.demo -e command network -e wifi show -e level 4

# Hide notification
adb shell am broadcast -a com.android.systemui.demo -e command notifications -e visible false

# Battery
shell am broadcast -a com.android.systemui.demo -e command battery -e level 100


# To push system apps
emulator -avd EMULATOR_NAME -partition-size 300

adb remount
adb push file.apk
adb shell chmod 06755 /system/app/file


Backup
 * boot into recovery
 * adb backup -f boot.img boot
 * adb backup -f system.img system
 * adb backup -f data.img data

 * adb backup -all -apk -shared #Backup data + apps
 * adb restore backup.adb #Restore data from ^ backup
 * adb logcat | grep BackupManager #See log while restoring data

Restore
 * boot into recovery
 * adb shell echo -n boot > /tmp/ro.bu.restore
 * adb restore boot.img
 * adb shell echo -n system > /tmp/ro.bu.restore
 * adb restore system.img
 * adb shell echo -n data > /tmp/ro.bu.restore
 * adb restore data.img

Logcat
 * adb logcat | grep `adb shell ps | grep com.example.package | awk '{ print $2; }'`


removes the app but leaves the data and cache directories.
 * adb uninstall -k com.mycompany.myapp

Clean app data
 * adb shell pm clear com.package.foo

Keyevents
 * adb shell input keyevent 82

 82 - unlock
 26 - screen toggle

Apps
 * adb shell pm list packages #installed apps
 * adb shell pm path com.example.someapp #show path of an app
 * adb pull <path from above command>

 * adb backup -apk com.twitter.android #single app
 * dd if=backup.ab bs=24 skip=1 | openssl zlib -d > backup.tar #.ab to tar conversion


Remove carrier bloatware
 * adb shell cmd pm list packages | grep 'amazon'
 * adb shell
 * pm uninstall -k --user 0 <name of package>

Screenshot
 * adb shell screencap -p /sdcard/screen.png
 * adb shell screencap -p > myfile.jpg

Wireless
 // connect device and run
 * adb tcpip 5555
 // disconnect and run this on laptop
 * adb connect DEVICE_IP:5555

Screen Mirror
 * Scrcpy: https://github.com/Genymobile/scrcpy

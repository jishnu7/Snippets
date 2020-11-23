// remount /system directory to remove or replace files

mount -o rw,remount /dev/block/mtdblock3 /system

// emulator
adb shell mount -o remount,rw -t yaffs2 /dev/block/mtdblock0 /system
